import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './song';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SongService {
    private apiServerUrl = 'http://localhost:8080/song';

    constructor(private http: HttpClient) { }

    public getSongs(): Observable<Song[]> {
        return this.http.get<any>(`${this.apiServerUrl}/all`);
    }

    public findSongById(songId: number): Observable<Song> {
        return this.http.get<any>(`${this.apiServerUrl}/find/${songId}`)
    }

    public addSong(song: Song): Observable<Song> {
        return this.http.post<any>(`${this.apiServerUrl}/add`, song);
    }

    public updateSong(song: Song): Observable<Song> {
        return this.http.put<any>(`${this.apiServerUrl}/update`, song);
    }

    public deleteSong(songId: number): Observable<void> {
        return this.http.delete<any>(`${this.apiServerUrl}/delete/${songId}`);
    }
}
