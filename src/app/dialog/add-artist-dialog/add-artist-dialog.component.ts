import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-artist-dialog',
  templateUrl: './add-artist-dialog.component.html',
  styleUrls: ['./add-artist-dialog.component.css']
})
export class AddArtistDialogComponent {
  constructor(public dialogRed: MatDialogRef<AddArtistDialogComponent>, private fb: FormBuilder) {}

  artistForm = this.fb.group({
    artName: ['', Validators.required],
    artImgPath: ['', Validators.required], // Updated to handle files
    members: this.fb.array([])
  });

  get members() {
    return this.artistForm.get('members') as FormArray;
  }

  addMember() {
    const memberForm = this.fb.group({
      memberName: ['', Validators.required]
    });

    this.members.push(memberForm);
  }

  deleteMember(index: number) {
    this.members.removeAt(index);
  }

  onSubmit() {
    this.dialogRed.close(this.artistForm.value);
    console.log(this.artistForm.value);
  }

}
