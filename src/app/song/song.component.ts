import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { SongService } from './song.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Artist } from '../artist/artist';
import { ArtistService } from '../artist/artist.service';

@Component({
    selector: 'app-song',
    templateUrl: './song.component.html',
    styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
    public songs!: Song[];
    public editSong!: Song;
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
                console.log("All Songs:")
                console.log(response);
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
                console.log("All Artists:")
                console.log(response);
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
        this.songService.addSong(addForm.value).subscribe(
            (response: Song) => {
                console.log("Trying to save this")
                console.log(addForm.value)
                console.log(response);
                this.getSongs();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                console.log("Trying to save this")
                console.log(addForm.value)
                alert(error.message);
                addForm.reset();
            }
        );
    }
}
