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
  selectedAlbum: Album | undefined; // Change the type based on your artist object structure
  albums: Album[] = [];
  photocards: PhotocardFull[] = [];
  error?: string = undefined

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe((params) => {
      // Access the artist ID from the route
      this.albumID = params['id'];

      this.httpClient
        .get<Album[]>(`http://localhost:3000/albums/${this.albumID}`)
        .pipe(
          tap((results: Album[]) => {
            this.albums = this.albums.concat(results);
            this.selectedAlbum = results[0]; // Assuming there is only one artist in the array
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

  // albums: { id: number; name: string; imageFilePath: string }[] = [
  //   { id: 1, name: 'Formula of Love', imageFilePath: 'assets/FOL.jpg' },
  //   { id: 2, name: 'Oddinary', imageFilePath: 'assets/Oddinary.jpg' },
  //   { id: 3, name: 'Cheshire', imageFilePath: 'assets/Cheshire.jpg' },
  // ];
  
  // photocards: { id: number; name: string; album: string; imageFilePath: string }[] = [
  //   { id: 1, name: 'Nayeon', album: 'Formula of Love', imageFilePath: 'assets/NY3.jpg' },
  //   { id: 2, name: 'Nayeon', album: 'Twicecoaster Lane 1',imageFilePath: 'assets/NY2.jpg' },
  //   { id: 3, name: 'Nayeon', album: 'Eyes Wide Open',imageFilePath: 'assets/NY1.jpg' },
  // ];
}
