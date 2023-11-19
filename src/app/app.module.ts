import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ArtistHomeComponent } from './artists/artist-home/artist-home.component';
import { AlbumHomeComponent } from './albums/album-home/album-home.component';
import { PhotocardHomeComponent } from './photocards/photocard-home/photocard-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistHomeComponent,
    AlbumHomeComponent,
    PhotocardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
