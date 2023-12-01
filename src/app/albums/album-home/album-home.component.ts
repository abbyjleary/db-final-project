import { Component } from '@angular/core';

@Component({
  selector: 'app-album-home',
  templateUrl: './album-home.component.html',
  styleUrls: ['./album-home.component.css']
})
export class AlbumHomeComponent {
  albums: { id: number; name: string; imageFilePath: string }[] = [
    { id: 1, name: 'Formula of Love', imageFilePath: 'assets/FOL.jpg' },
    { id: 2, name: 'Oddinary', imageFilePath: 'assets/Oddinary.jpg' },
    { id: 3, name: 'Cheshire', imageFilePath: 'assets/Cheshire.jpg' },
  ];
}
