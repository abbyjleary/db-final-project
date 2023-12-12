import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhotocardDialogComponent } from './add-photocard-dialog.component';

describe('AddPhotocardDialogComponent', () => {
  let component: AddPhotocardDialogComponent;
  let fixture: ComponentFixture<AddPhotocardDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPhotocardDialogComponent]
    });
    fixture = TestBed.createComponent(AddPhotocardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
