import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Artist } from 'types';
import { catchError, tap, of } from 'rxjs';

@Component({
  selector: 'app-artist-home',
  templateUrl: './artist-home.component.html',
  styleUrls: ['./artist-home.component.css']
})
export class ArtistHomeComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  artists: Artist[] = [];
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
  }

}
