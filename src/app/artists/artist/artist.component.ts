import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { AlbumFull, Artist, PhotocardFull } from 'types';
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
  photocards: PhotocardFull[] = [];
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

    this.httpClient
      .get<PhotocardFull[]>(`http://localhost:3000/photocards/artist/${this.artistId}`)
      .pipe(
        tap((results: PhotocardFull[]) => {
          this.photocards = this.photocards.concat(results);
          console.log("Photocards")
          console.log(this.photocards)
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
