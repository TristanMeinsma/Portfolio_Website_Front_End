import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { SongService } from './song.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-song',
    templateUrl: './song.component.html',
    styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
    public songs!: Song[];
    public editSong!: Song;
    public deleteSong!: Song;

    constructor(private songService: SongService) { }

    ngOnInit(): void {
        this.getSongs();
    }

    public getSongs(): void {
        this.songService.getSongs().subscribe(
            (response: Song[]) => {
                console.log(response);
                this.songs = response;
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
}
