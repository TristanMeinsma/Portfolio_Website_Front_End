import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SongAdminComponent } from './song/song.admin/song.admin.component';
import { SongViewComponent } from './song/song.view/song.view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtistAdminComponent } from './artist/artist.admin/artist.admin.component';
import { ArtistViewComponent } from './artist/artist.view/artist.view.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    SongAdminComponent,
    SongViewComponent,
    NavbarComponent,
    ArtistAdminComponent,
    ArtistViewComponent,
    FrontpageComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
