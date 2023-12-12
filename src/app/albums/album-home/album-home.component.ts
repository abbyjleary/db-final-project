import { Component } from '@angular/core';
import { Album, AlbumFull, AlbumVersion, Artist } from 'types';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, of } from 'rxjs';
import { query } from '@angular/animations';
import { DeleteConfirmationDialogComponent } from 'src/app/dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-album-home',
  templateUrl: './album-home.component.html',
  styleUrls: ['./album-home.component.css']
})
export class AlbumHomeComponent {
  constructor(private httpClient: HttpClient, private dialog: MatDialog) { }

  allAlbums: AlbumFull[] = [];
  artists: Artist[] = [];
  albums: Album[] = [];
  selelectedArtistIDs: number[] = [];
  selectedAlbumIDs: number[] = [];
  selectedMemberIDs: number[] = [];
  selectedOwned: string = 'all';
  error?: string = undefined

  ngOnInit(): void {
    this.httpClient
      .get<AlbumFull[]>('http://localhost:3000/albumVersions')
      .pipe(
        tap((results: AlbumFull[]) => {
          this.allAlbums = this.allAlbums.concat(results);

        }),
        catchError((error) => {
          console.log(error);
          this.error = `Failed to load items: ${error.message}`;
          return of();
        }),
      )
      .subscribe();

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

  updateFilters() {
    const queryParams: string[] = [];
    const selectedArtistIds = this.artists.filter(artist => artist.isSelected).map(artist => artist.artID);
    const selectedAlbumIds = this.albums.filter(album => album.isSelected).map(album => album.albumID);

    if (this.selectedOwned !== 'all') {
      if (this.selectedOwned === 'owned') {
        queryParams.push('owned=1');
      }
      else if (this.selectedOwned === 'unowned') {
        queryParams.push('owned=0');
        queryParams.push('onTheWay=0');
      }
      else if (this.selectedOwned === 'ontheway') {
        queryParams.push('onTheWay=1');
      }
    }

    if (selectedArtistIds.length > 0) {
      const artistParams = selectedArtistIds.map(id => `artID=${id}`);
      queryParams.push(...artistParams);
    }

    if (selectedAlbumIds.length > 0) {
      const albumParams = selectedAlbumIds.map(id => `albumID=${id}`);
      queryParams.push(...albumParams);
    }

    const queryString = queryParams.join('&');

    this.httpClient
      .get<AlbumFull[]>(`http://localhost:3000/albumVersions/filter?${queryString}`)
      .pipe(
        tap((results: AlbumFull[]) => {
          this.allAlbums = [];
          this.allAlbums = this.allAlbums.concat(results);
        }),
        catchError((error) => {
          console.log(error);
          this.error = `Failed to load items: ${error.message}`;
          return of();
        }),
      )
      .subscribe();
  }

  updateStatus(versionID: number, index: number) {

    this.httpClient
      .put(`http://localhost:3000/albumVersions/${versionID}?statusID=${index}`, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        tap(() => {
          this.updateFilters();
        }),
        catchError((error) => {
          console.log(error);
          this.error = `Failed to update status: ${error.message}`;
          return of();
        }),
      )
      .subscribe();
  }

  deleteAlbum(versionID: number) {

    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {});


    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.httpClient
          .delete(`http://localhost:3000/albumVersions/${versionID}`)
          .pipe(
            tap(() => {
              this.updateFilters();
            }),
            catchError((error) => {
              console.log(error);
              this.error = `Failed to delete album: ${error.message}`;
              return of();
            }),
          )
          .subscribe();
      }
    })
  }
}
