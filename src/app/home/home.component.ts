import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  artists: { id: number; name: string; imageFilePath: string }[] = [
    { id: 1, name: 'TWICE', imageFilePath: 'assets/TWICE.jpg' },
    { id: 2, name: 'Stray Kids', imageFilePath: 'assets/SKZ.jpg' },
    { id: 3, name: 'ITZY', imageFilePath: 'assets/ITZY.jpg' },
    { id: 4, name: '(G)I-DLE', imageFilePath: 'assets/GIDLE.jpg' },
    { id: 5, name: 'BIBI', imageFilePath: 'assets/BIBI.jpg' },
  ];
  albums: { id: number; name: string; imageFilePath: string }[] = [
    { id: 1, name: 'Formula of Love', imageFilePath: 'assets/FOL.jpg' },
    { id: 2, name: 'Oddinary', imageFilePath: 'assets/Oddinary.jpg' },
    { id: 3, name: 'Cheshire', imageFilePath: 'assets/Cheshire.jpg' },
  ];
  photocards: { id: number; name: string; album: string; imageFilePath: string }[] = [
    { id: 1, name: 'Nayeon', album: 'Formula of Love', imageFilePath: 'assets/NY3.jpg' },
    { id: 2, name: 'Nayeon', album: 'Twicecoaster Lane 1',imageFilePath: 'assets/NY2.jpg' },
    { id: 3, name: 'Nayeon', album: 'Eyes Wide Open',imageFilePath: 'assets/NY1.jpg' },
  ];

}
