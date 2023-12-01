import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ArtistHomeComponent } from './artists/artist-home/artist-home.component';
import { AlbumHomeComponent } from './albums/album-home/album-home.component';
import { PhotocardHomeComponent } from './photocards/photocard-home/photocard-home.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { AlbumComponent } from './albums/album/album.component';
import { AddDialogComponent } from './dialog/add-dialog/add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistHomeComponent,
    AlbumHomeComponent,
    PhotocardHomeComponent,
    ArtistComponent,
    AlbumComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
