import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { SongAdminComponent } from './song/admin/song.admin.component';
import { SongViewComponent } from './song/view/song.view.component';


@NgModule({
  declarations: [
    AppComponent,
    SongAdminComponent,
    SongViewComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
