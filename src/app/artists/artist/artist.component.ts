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
  selectedArtist: Artist | undefined;
  artists: Artist[] = [];
  albums: AlbumFull[] = [];
  photocards: PhotocardFull[] = [];
  error?: string = undefined

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.artistId = params['id'];

      this.httpClient
        .get<Artist[]>(`http://localhost:3000/artists/${this.artistId}`)
        .pipe(
          tap((results: Artist[]) => {
            this.artists = this.artists.concat(results);
            this.selectedArtist = results[0]; 
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
        }),
        catchError((error) => {
          console.log(error);
          this.error = `Failed to load items: ${error.message}`;
          return of();
        }),
      )
      .subscribe();
  }

updateStatus(index: number){
  
}

}
