import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albumId: number = -1;
  selectedAlbum: any; // Change the type based on your artist object structure

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe((params) => {
      // Access the artist ID from the route
      this.albumId = params['id'];

      // Find the artist in the array based on the ID
      this.selectedAlbum = this.albums.find((album) => album.id === +this.albumId);
    });
  }

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
