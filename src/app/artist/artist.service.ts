import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private baseUrl = 'http://localhost:8080'
  private artistUrl = `${this.baseUrl}/artist`;

  constructor(private http: HttpClient) { }

  public getArtists(): Observable<Artist[]> {
      return this.http.get<any>(`${this.artistUrl}/all`);
  }

  public findArtistById(artistId: number): Observable<Artist> {
    return this.http.get<any>(`${this.artistUrl}/find/${artistId}`)
  }

  public addArtist(artist: Artist): Observable<Artist> {
    return this.http.post<any>(`${this.artistUrl}/add`, artist);
}

public updateArtist(artist: Artist): Observable<Artist> {
    return this.http.put<any>(`${this.artistUrl}/update`, artist);
}

public deleteArtist(artistId: number): Observable<void> {
    return this.http.delete<any>(`${this.artistUrl}/delete/${artistId}`);
}
}
