import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Artist } from '../../artist/artist';
import { ArtistService } from '../../artist/artist.service';

@Component({
    selector: 'artist-admin',
    templateUrl: './artist.admin.component.html',
    styleUrls: ['./artist.admin.component.css']
})
export class ArtistAdminComponent {
    public artists!: Artist[];
    public editArtist: Artist | null | undefined;
    public deleteSong!: Artist;

    constructor(private artistService: ArtistService) { }

    ngOnInit(): void {
        this.getArtists();
    }

    public getArtists(): void {
        this.artistService.getArtists().subscribe(
            (response: Artist[]) => {
                this.artists = response;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public deleteArtistById(artistId: number): void {
        console.log(artistId);
        this.artistService.deleteArtist(artistId).subscribe(
            () => {
                this.getArtists();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public addArtist(addForm: NgForm): void {
        document.getElementById("add-artist-form")?.click();

        this.artistService.addArtist(addForm.value).subscribe(
            (response: Artist) => {
                console.log(response);
                this.getArtists;
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }

    public updateArtist(artist: Artist) {
        this.artistService.updateArtist(artist).subscribe(
            (response: Artist) => {
                console.log(response);
                this.getArtists;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public openModal(artist: Artist | null, mode: string): void {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'add') {
            button.setAttribute('data-target', '#addArtistModal')
        }
        if (mode === 'edit') {
            this.editArtist = artist;
            button.setAttribute('data-target', '#updateArtistModal')
        }

        container?.appendChild(button);
        button.click();
    }
}