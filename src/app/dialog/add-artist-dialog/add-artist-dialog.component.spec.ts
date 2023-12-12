import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtistDialogComponent } from './add-artist-dialog.component';

describe('AddArtistDialogComponent', () => {
  let component: AddArtistDialogComponent;
  let fixture: ComponentFixture<AddArtistDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddArtistDialogComponent]
    });
    fixture = TestBed.createComponent(AddArtistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
