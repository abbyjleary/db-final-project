import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ArtistHomeComponent } from './artists/artist-home/artist-home.component';
import { AlbumHomeComponent } from './albums/album-home/album-home.component';
import { PhotocardHomeComponent } from './photocards/photocard-home/photocard-home.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { AlbumComponent } from './albums/album/album.component';
import { AddArtistDialogComponent } from './dialog/add-artist-dialog/add-artist-dialog.component';
import { AddAlbumDialogComponent } from './dialog/add-album-dialog/add-album-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistHomeComponent,
    AlbumHomeComponent,
    PhotocardHomeComponent,
    ArtistComponent,
    AlbumComponent,
    AddArtistDialogComponent,
    AddAlbumDialogComponent
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
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
