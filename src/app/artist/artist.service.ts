import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private baseUrl = 'http://localhost:8080'
  private songUrl = `${this.baseUrl}/artist`;

  constructor(private http: HttpClient) { }

  public getArtists(): Observable<Artist[]> {
      return this.http.get<any>(`${this.songUrl}/all`);
  }
}
