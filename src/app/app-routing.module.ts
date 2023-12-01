import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistHomeComponent } from './artists/artist-home/artist-home.component';
import { AlbumHomeComponent } from './albums/album-home/album-home.component';
import { PhotocardHomeComponent } from './photocards/photocard-home/photocard-home.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { AlbumComponent } from './albums/album/album.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artists', component: ArtistHomeComponent },
  { path: 'albums', component: AlbumHomeComponent },
  { path: 'photocards', component: PhotocardHomeComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
