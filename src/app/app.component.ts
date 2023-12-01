import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddDialogComponent } from './dialog/add-dialog/add-dialog.component';

export interface DialogData {
  artists: string[];
  albums: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'electron-app';
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

  constructor( public dialog: MatDialog) { }

  openDialog(type : number) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '600px',
      data: {artists: this.artists, albums: this.albums, type}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
