import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Album, AlbumFull, Member, Photocard } from 'types';
import { catchError, tap, of } from 'rxjs';

@Component({
  selector: 'app-add-photocard-dialog',
  templateUrl: './add-photocard-dialog.component.html',
  styleUrls: ['./add-photocard-dialog.component.css']
})
export class AddPhotocardDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddPhotocardDialogComponent>, private fb: FormBuilder, private httpClient: HttpClient) {}
  albums: Album[] = [];
  members: Member[] = [];
  error?: string = undefined

  ngOnInit(): void {
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

    this.httpClient
      .get<Member[]>('http://localhost:3000/members')
      .pipe(
        tap((results: Member[]) => {
          this.members = this.members.concat(results);
        }),
        catchError((error) => {
          console.log(error);
          this.error = `Failed to load items: ${error.message}`;
          return of();
        }),
      )
      .subscribe();
  }

  photocardForm = this.fb.group({
    album: [''],
    member: [''],
    cardImgPath: ['']
  });

  onSubmit() {
    this.dialogRef.close(this.photocardForm.value);
  }

  selectedAlbum: Album | undefined;
  selectedMember: Member | undefined;
}
