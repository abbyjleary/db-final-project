import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artistId: number = -1;
  selectedArtist: any; // Change the type based on your artist object structure

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe((params) => {
      // Access the artist ID from the route
      this.artistId = params['id'];

      // Find the artist in the array based on the ID
      this.selectedArtist = this.artists.find((artist) => artist.id === +this.artistId);
    });
  }

  artists: { id: number; name: string; imageFilePath: string }[] = [
    { id: 1, name: 'TWICE', imageFilePath: 'assets/TWICE.jpg' },
    { id: 2, name: 'Stray Kids', imageFilePath: 'assets/SKZ.jpg' },
    { id: 3, name: 'ITZY', imageFilePath: 'assets/ITZY.jpg' },
    { id: 4, name: '(G)I-DLE', imageFilePath: 'assets/GIDLE.jpg' },
    { id: 5, name: 'BIBI', imageFilePath: 'assets/BIBI.jpg' },
  ];

  albums: { id: number; name: string; imageFilePath: string }[] = [
    { id: 1, name: 'Formula of Love', imageFilePath: 'assets/FOL.jpg' },
  ];
  photocards: { id: number; name: string; album: string; imageFilePath: string }[] = [
    { id: 1, name: 'Nayeon', album: 'Formula of Love', imageFilePath: 'assets/NY3.jpg' },
    { id: 2, name: 'Nayeon', album: 'Twicecoaster Lane 1',imageFilePath: 'assets/NY2.jpg' },
    { id: 3, name: 'Nayeon', album: 'Eyes Wide Open',imageFilePath: 'assets/NY1.jpg' },
  ];

}
