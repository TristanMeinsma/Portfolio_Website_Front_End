import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './song';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SongService {
    private baseUrl = 'http://localhost:8080'
    private songUrl = `${this.baseUrl}/song`;

    constructor(private http: HttpClient) { }

    public getSongs(): Observable<Song[]> {
        return this.http.get<any>(`${this.songUrl}/all`);
    }

    public findSongById(songId: number): Observable<Song> {
        return this.http.get<any>(`${this.songUrl}/find/${songId}`)
    }

    public addSong(song: Song): Observable<Song> {
        return this.http.post<any>(`${this.songUrl}/add`, song);
    }

    public updateSong(song: Song): Observable<Song> {
        return this.http.put<any>(`${this.songUrl}/update`, song);
    }

    public deleteSong(songId: number): Observable<void> {
        return this.http.delete<any>(`${this.songUrl}/delete/${songId}`);
    }

    public seedSongs(): Observable<void> {
        return this.http.get<any>(`${this.baseUrl}/seed`)
    }
}
