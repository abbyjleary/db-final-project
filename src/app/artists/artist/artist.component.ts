import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { AlbumFull, Artist } from 'types';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, of } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artistId: number = -1;
  selectedArtist: Artist | undefined; // Change the type based on your artist object structure
  artists: Artist[] = [];
  albums: AlbumFull[] = [];
  error?: string = undefined

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe((params) => {
      // Access the artist ID from the route
      this.artistId = params['id'];

      this.httpClient
        .get<Artist[]>(`http://localhost:3000/artists/${this.artistId}`)
        .pipe(
          tap((results: Artist[]) => {
            this.artists = this.artists.concat(results);
            this.selectedArtist = results[0]; // Assuming there is only one artist in the array
            console.log(this.selectedArtist);
          }),
          catchError((error) => {
            console.log(error);
            this.error = `Failed to load artist: ${error.message}`;
            return of();
          }),
        )
        .subscribe();
    });

    this.httpClient
      .get<AlbumFull[]>(`http://localhost:3000/albumVersions/artist/${this.artistId}`)
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

  // albums: { id: number; name: string; imageFilePath: string }[] = [
  //   { id: 1, name: 'Formula of Love', imageFilePath: 'assets/FOL.jpg' },
  // ];
  photocards: { id: number; name: string; album: string; imageFilePath: string }[] = [
    { id: 1, name: 'Nayeon', album: 'Formula of Love', imageFilePath: 'assets/NY3.jpg' },
    { id: 2, name: 'Nayeon', album: 'Twicecoaster Lane 1', imageFilePath: 'assets/NY2.jpg' },
    { id: 3, name: 'Nayeon', album: 'Eyes Wide Open', imageFilePath: 'assets/NY1.jpg' },
  ];

}
