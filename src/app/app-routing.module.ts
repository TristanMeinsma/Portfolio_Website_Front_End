import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongViewComponent } from './song/song.view/song.view.component';
import { SongAdminComponent } from './song/song.admin/song.admin.component';
import { ArtistAdminComponent } from './artist/artist.admin/artist.admin.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'admin/song', component: SongAdminComponent },
  { path: 'admin/artist', component: ArtistAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
