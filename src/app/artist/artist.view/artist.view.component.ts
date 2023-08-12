import { Component } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'artist-view',
  templateUrl: './artist.view.component.html',
  styleUrls: ['./artist.view.component.css']
})
export class ArtistViewComponent {
  public artists!: Artist[];

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.getArtists();
}

public getArtists(): void {
    this.artistService.getArtists().subscribe(
        (response: Artist[]) => {
            this.artists = response;
            console.log(response);
        },
        (error: HttpErrorResponse) => {
            alert(error.message);
        }
    )
}
  
}
