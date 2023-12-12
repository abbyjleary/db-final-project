import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Album, Artist } from 'types';
import { catchError, tap, of } from 'rxjs';

@Component({
  selector: 'app-add-album-dialog',
  templateUrl: './add-album-dialog.component.html',
  styleUrls: ['./add-album-dialog.component.css']
})
export class AddAlbumDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddAlbumDialogComponent>, private fb: FormBuilder, private httpClient: HttpClient) { }
  albums: Album[] = [];
  artists: Artist[] = [];
  error?: string = undefined

  ngOnInit(): void {
    this.httpClient
    .get<Artist[]>('http://localhost:3000/artists')
    .pipe(
      tap((results: Artist[]) => {
        this.artists = this.artists.concat(results);
      }),
      catchError((error) => {
        console.log(error);
        this.error = `Failed to load items: ${error.message}`;
        return of();
      }),
    )
    .subscribe();

  this.httpClient
    .get<Album[]>('http://localhost:3000/albums')
    .pipe(
      tap((results: Album[]) => {
        this.albums = this.albums.concat(results);
      }),
      catchError((error) => {
        console.log(error);
        this.error = `Failed to load items: ${error.message}`;
        return of();
      }),
    )
    .subscribe();
  }

  albumForm = this.fb.group({
    artID: ['', Validators.required],
    album: ['', Validators.required],
    versionName: ['', Validators.required],
    versionImgPath: ['', Validators.required]
  });

  onSubmit() {
    this.dialogRef.close(this.albumForm.value);
    console.log(this.albumForm.value);
  }

  selectedAlbum: Album | undefined;

  displayAlbum(album?: Album): string{
    return album ? album.albumName : '';
  }
}
