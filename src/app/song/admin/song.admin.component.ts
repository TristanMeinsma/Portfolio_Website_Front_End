import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Artist } from '../../artist/artist';
import { ArtistService } from '../../artist/artist.service';

@Component({
    selector: 'song-admin',
    templateUrl: './song.admin.component.html',
    styleUrls: ['./song.admin.component.css']
})
export class SongAdminComponent implements OnInit {
    public songs!: Song[];
    public editSong: Song | null | undefined;
    public deleteSong!: Song;
    public artists!: Artist[];
    public selectedArtists: number[] = [];

    constructor(private songService: SongService, private artistService: ArtistService) { }

    ngOnInit(): void {
        this.getSongs();
        this.getArtists();
    }

    public getSongs(): void {
        this.songService.getSongs().subscribe(
            (response: Song[]) => {
                this.songs = response;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
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

    public deleteSongById(songId: number): void {
        this.songService.deleteSong(songId).subscribe(
            () => {
                this.getSongs();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public seedSongs(): void {
        this.songService.seedSongs().subscribe(
            () => {
                this.getSongs();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public addSong(addForm: NgForm): void {
        document.getElementById("add-song-form")?.click();

        const songWithArtists = {
            ...addForm.value,
            artists: this.selectedArtists
        };

        this.songService.addSong(addForm.value).subscribe(
            (response: Song) => {
                console.log(response);
                this.getSongs();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }

    public updateSong(song: Song): void {
        this.songService.updateSong(song).subscribe(
            (response: Song) => {
                console.log(response);
                this.getSongs();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public openModal(song: Song | null, mode: string): void {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'add') {
            button.setAttribute('data-target', '#addSongModal')
        }
        if (mode === 'edit') {
            this.editSong = song;
            button.setAttribute('data-target', '#updateSongModal')
        }

        container?.appendChild(button);
        button.click();
    }
}
