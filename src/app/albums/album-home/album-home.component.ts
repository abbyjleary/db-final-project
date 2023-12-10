import { Component } from '@angular/core';
import { Album, AlbumFull, AlbumVersion } from 'types';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, of } from 'rxjs';

@Component({
  selector: 'app-album-home',
  templateUrl: './album-home.component.html',
  styleUrls: ['./album-home.component.css']
})
export class AlbumHomeComponent {
  constructor(private httpClient: HttpClient) { }

  albums: AlbumFull[] = [];
  error?: string = undefined
  
  ngOnInit(): void {
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
}
