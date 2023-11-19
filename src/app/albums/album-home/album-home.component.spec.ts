import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHomeComponent } from './album-home.component';

describe('AlbumHomeComponent', () => {
  let component: AlbumHomeComponent;
  let fixture: ComponentFixture<AlbumHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumHomeComponent]
    });
    fixture = TestBed.createComponent(AlbumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
