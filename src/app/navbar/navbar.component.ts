import { Component } from '@angular/core';
import { SongService } from '../song/song.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private songService: SongService) {}

  public seedDatabase() {
    this.songService.seedDatabase();
  }

}
