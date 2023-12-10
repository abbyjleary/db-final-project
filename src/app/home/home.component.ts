import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist, AlbumVersion, AlbumFull, Album } from 'types';
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
  error?: string = undefined

  ngOnInit(): void {
    this.httpClient
      .get<Artist[]>('http://localhost:3000/artists')
      .pipe(
        tap((results: Artist[]) => {
          this.artists = this.artists.concat(results);
          console.log(this.artists)
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
          console.log(this.albums)
        }),
        catchError((error) => {
          console.log(error);
          this.error = `Failed to load items: ${error.message}`;
          return of();
        }),
      )
      .subscribe();
  }

  photocards: { id: number; name: string; album: string; imageFilePath: string }[] = [
    { id: 1, name: 'Nayeon', album: 'Formula of Love', imageFilePath: 'assets/NY3.jpg' },
    { id: 2, name: 'Nayeon', album: 'Twicecoaster Lane 1', imageFilePath: 'assets/NY2.jpg' },
    { id: 3, name: 'Nayeon', album: 'Eyes Wide Open', imageFilePath: 'assets/NY1.jpg' },
  ];

}
