import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddArtistDialogComponent } from './dialog/add-artist-dialog/add-artist-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Member, Artist, AlbumFull, Album } from 'types';
import { catchError, tap, of } from 'rxjs';
import { AddAlbumDialogComponent } from './dialog/add-album-dialog/add-album-dialog.component';
import { AddPhotocardDialogComponent } from './dialog/add-photocard-dialog/add-photocard-dialog.component';

export interface DialogData {
  artists: string[];
  albums: string[];
}

export interface ArtistID {
  id: number;
}

export interface memberForm {
  memberName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Kpop Database';
  constructor(public dialog: MatDialog, public httpClient: HttpClient) { }
  artists: Artist[] = [];
  albums: Album[] = [];
  error?: string = undefined

  ngOnInit(): void {
    this.httpClient
      .get<Artist[]>('http://localhost:3000/artists')
      .pipe(
        tap((results: Artist[]) => {
          this.artists = this.artists.concat(results);
        }),
        catchError((error) => {
          console.log(error);
          this.error = `Failed to load items: ${error.message}`;
          return of();
        }),
      )
      .subscribe();

    this.httpClient
      .get<Album[]>('http://localhost:3000/albums')
      .pipe(
        tap((results: Album[]) => {
          this.albums = this.albums.concat(results);
        }),
        catchError((error) => {
          console.log(error);
          this.error = `Failed to load items: ${error.message}`;
          return of();
        }),
      )
      .subscribe();
  }

  openDialog(choice: number) {
    if (choice === 0) {
      const dialogRef = this.dialog.open(AddArtistDialogComponent, {
        width: '600px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result.artName);
        console.log(result.artImgPath);
        console.log(result.members);

        if (result) {
          this.httpClient.post<ArtistID>('http://localhost:3000/artists', {
            artName: result.artName,
            artImgPath: result.artImgPath,
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          }).subscribe((results: ArtistID) => {
            console.log(results);
            result.members.forEach((member: memberForm) => {
              this.httpClient.post<Member>('http://localhost:3000/members', {
                memberName: member.memberName,
                artID: results.id,
              }, {
                headers: {
                  'Content-Type': 'application/json',
                },
              }).subscribe();
            });
          });
        }
      });
    }
    if (choice === 1) {
      const dialogRef = this.dialog.open(AddAlbumDialogComponent, {
        width: '600px',
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (typeof result.album === 'string') {
            this.httpClient.post<ArtistID>('http://localhost:3000/albums', {
              artID: result.artID,
              albumName: result.album
            }, {
              headers: {
                'Content-Type': 'application/json',
              },
            }).subscribe((results: ArtistID) => {
              console.log(results);
              this.httpClient.post<AlbumFull>('http://localhost:3000/albumVersions', {
                albumID: results.id,
                version: result.versionName,
                versionImgPath: result.versionImgPath
              }, {
                headers: {
                  'Content-Type': 'application/json',
                },
              }).subscribe();
            });
          }
          else {
            this.httpClient.post('http://localhost:3000/albumVersions', {
              albumID: result.album.albumID,
              version: result.versionName,
              versionImgPath: result.versionImgPath
            }, {
              headers: {
                'Content-Type': 'application/json',
              },
            }).subscribe();
          }
        }
      })
    }
    if (choice === 2) {
      const dialogRef = this.dialog.open(AddPhotocardDialogComponent, {
        width: '600px',
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.httpClient.post('http://localhost:3000/photocards', {
            albumID: result.album.albumID,
            memberID: result.member.memberID,
            pcImgPath: result.cardImgPath
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          }).subscribe();
        }
      });
    }
  }
}
