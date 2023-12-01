import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-home',
  templateUrl: './artist-home.component.html',
  styleUrls: ['./artist-home.component.css']
})
export class ArtistHomeComponent {

  artists: { id: number; name: string; imageFilePath: string }[] = [
    { id: 1, name: 'TWICE', imageFilePath: 'assets/TWICE.jpg' },
    { id: 2, name: 'Stray Kids', imageFilePath: 'assets/SKZ.jpg' },
    { id: 3, name: 'ITZY', imageFilePath: 'assets/ITZY.jpg' },
    { id: 4, name: '(G)I-DLE', imageFilePath: 'assets/GIDLE.jpg' },
    { id: 5, name: 'BIBI', imageFilePath: 'assets/BIBI.jpg' },
  ];

}
