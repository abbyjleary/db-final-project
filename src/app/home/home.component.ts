import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist, AlbumVersion, AlbumFull, Album , PhotocardFull} from 'types';
import { catchError, tap, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private httpClient: HttpClient) { }

  artists: Artist[] = [];
  albums: AlbumFull[] = [];
  photocards: PhotocardFull[] = [];
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
      .get<AlbumFull[]>('http://localhost:3000/albumVersions')
      .pipe(
        tap((results: AlbumFull[]) => {
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
  }

}
