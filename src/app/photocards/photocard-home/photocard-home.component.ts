import { Component } from '@angular/core';
import { PhotocardFull } from 'types';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, of } from 'rxjs';

@Component({
  selector: 'app-photocard-home',
  templateUrl: './photocard-home.component.html',
  styleUrls: ['./photocard-home.component.css']
})
export class PhotocardHomeComponent {

  constructor(private httpClient: HttpClient) { }

  photocards: PhotocardFull[] = [];
  error?: string = undefined
  
  ngOnInit(): void {
    this.httpClient
      .get<PhotocardFull[]>('http://localhost:3000/photocards')
      .pipe(
        tap((results: PhotocardFull[]) => {
          this.photocards = this.photocards.concat(results);
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

  // photocards: { id: number; name: string; album: string; imageFilePath: string }[] = [
  //   { id: 1, name: 'Nayeon', album: 'Formula of Love', imageFilePath: 'assets/NY3.jpg' },
  //   { id: 2, name: 'Nayeon', album: 'Twicecoaster Lane 1',imageFilePath: 'assets/NY2.jpg' },
  //   { id: 3, name: 'Nayeon', album: 'Eyes Wide Open',imageFilePath: 'assets/NY1.jpg' },
  // ];
  // artists: { id: number; name: string; imageFilePath: string }[] = [
  //   { id: 1, name: 'TWICE', imageFilePath: 'assets/TWICE.jpg' },
  //   { id: 2, name: 'Stray Kids', imageFilePath: 'assets/SKZ.jpg' },
  //   { id: 3, name: 'ITZY', imageFilePath: 'assets/ITZY.jpg' },
  //   { id: 4, name: '(G)I-DLE', imageFilePath: 'assets/GIDLE.jpg' },
  //   { id: 5, name: 'BIBI', imageFilePath: 'assets/BIBI.jpg' },
  // ];

  // photocards: { id: number; name: string; imageFilePath: string }[] = [
  //   { id: 1, name: 'Formula of Love', imageFilePath: 'assets/FOL.jpg' },
  // ];
}
