import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocardHomeComponent } from './photocard-home.component';

describe('PhotocardHomeComponent', () => {
  let component: PhotocardHomeComponent;
  let fixture: ComponentFixture<PhotocardHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotocardHomeComponent]
    });
    fixture = TestBed.createComponent(PhotocardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
