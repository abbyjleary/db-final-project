import { Component } from '@angular/core';

@Component({
  selector: 'app-photocard-home',
  templateUrl: './photocard-home.component.html',
  styleUrls: ['./photocard-home.component.css']
})
export class PhotocardHomeComponent {
  photocards: { id: number; name: string; album: string; imageFilePath: string }[] = [
    { id: 1, name: 'Nayeon', album: 'Formula of Love', imageFilePath: 'assets/NY3.jpg' },
    { id: 2, name: 'Nayeon', album: 'Twicecoaster Lane 1',imageFilePath: 'assets/NY2.jpg' },
    { id: 3, name: 'Nayeon', album: 'Eyes Wide Open',imageFilePath: 'assets/NY1.jpg' },
  ];
}
