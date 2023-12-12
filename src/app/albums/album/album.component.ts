import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, AlbumFull, Photocard, PhotocardFull } from 'types';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, of } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albumID: number = -1;
  selectedAlbum: AlbumFull | undefined; // Change the type based on your artist object structure
  albums: AlbumFull[] = [];
  photocards: PhotocardFull[] = [];
  error?: string = undefined

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.albumID = params['id'];

      this.httpClient
        .get<AlbumFull[]>(`http://localhost:3000/albumVersions/album/${this.albumID}`)
        .pipe(
          tap((results: AlbumFull[]) => {
            this.albums = this.albums.concat(results);
            this.selectedAlbum = results[0];
          }),
          catchError((error) => {
            console.log(error);
            this.error = `Failed to load artist: ${error.message}`;
            return of();
          }),
        ).subscribe();
    });

    this.httpClient
      .get<PhotocardFull[]>(`http://localhost:3000/photocards/album/${this.albumID}`)
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
