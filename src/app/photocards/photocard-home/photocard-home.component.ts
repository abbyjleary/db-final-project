import { Component } from '@angular/core';
import { Album, Artist, Member, Photocard, PhotocardFull } from 'types';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, of } from 'rxjs';
import { DeleteConfirmationDialogComponent } from 'src/app/dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-photocard-home',
  templateUrl: './photocard-home.component.html',
  styleUrls: ['./photocard-home.component.css']
})
export class PhotocardHomeComponent {

  constructor(private httpClient: HttpClient, public dialog: MatDialog) { }

  photocards: PhotocardFull[] = [];
  artists: Artist[] = [];
  albums: Album[] = [];
  members: Member[] = [];
  selelectedArtistIDs: number[] = [];
  selectedAlbumIDs: number[] = [];
  selectedMemberIDs: number[] = [];
  selectedOwned: string = 'all';
  error?: string = undefined

  ngOnInit(): void {
    this.httpClient
      .get<PhotocardFull[]>('http://localhost:3000/photocards')
      .pipe(
        tap((results: PhotocardFull[]) => {
          this.photocards = this.photocards.concat(results);
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

    this.httpClient
      .get<Member[]>('http://localhost:3000/members')
      .pipe(
        tap((results: Member[]) => {
          this.members = this.members.concat(results);
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
    const selectedMemberIds = this.members.filter(member => member.isSelected).map(member => member.memberID);
    const selectedAlbumIds = this.albums.filter(album => album.isSelected).map(album => album.albumID);

    if (this.selectedOwned !== 'all') {
      if (this.selectedOwned === 'owned') {
        queryParams.push('pcOwned=1');
      }
      else if (this.selectedOwned === 'unowned') {
        queryParams.push('pcOwned=0');
        queryParams.push('pcOnTheWay=0');
      }
      else if (this.selectedOwned === 'ontheway') {
        queryParams.push('pcOnTheWay=1');
      }
    }

    if (selectedArtistIds.length > 0) {
      const artistParams = selectedArtistIds.map(id => `artID=${id}`);
      queryParams.push(...artistParams);
    }

    // Construct query parameters for selected members
    if (selectedMemberIds.length > 0) {
      const memberParams = selectedMemberIds.map(id => `memberID=${id}`);
      queryParams.push(...memberParams);
    }

    // Construct query parameters for selected albums
    if (selectedAlbumIds.length > 0) {
      const albumParams = selectedAlbumIds.map(id => `albumID=${id}`);
      queryParams.push(...albumParams);
    }

    // Combine all query parameters
    const queryString = queryParams.join('&');

    this.httpClient
      .get<PhotocardFull[]>(`http://localhost:3000/photocards/filter?${queryString}`)
      .pipe(
        tap((results: PhotocardFull[]) => {
          this.photocards = [];
          this.photocards = this.photocards.concat(results);
        }),
        catchError((error) => {
          console.log(error);
          this.error = `Failed to load items: ${error.message}`;
          return of();
        }),
      )
      .subscribe();
  }

  updateStatus(pcID: number, index: number) {

    this.httpClient
      .put(`http://localhost:3000/photocards/${pcID}?statusID=${index}`, {}, {
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

  deletePhotocard(pcID: number) {

    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {});


    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.httpClient
          .delete(`http://localhost:3000/photocards/${pcID}`, {
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
              this.error = `Failed to delete item: ${error.message}`;
              return of();
            }),
          )
          .subscribe();
      }
    })
  }

}
