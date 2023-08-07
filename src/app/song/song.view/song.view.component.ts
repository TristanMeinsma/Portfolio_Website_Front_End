import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Artist } from '../../artist/artist';
import { ArtistService } from '../../artist/artist.service';
import { FastAverageColor } from 'fast-average-color';

@Component({
    selector: 'song-view',
    templateUrl: './song.view.component.html',
    styleUrls: ['./song.view.component.css']
})

export class SongViewComponent implements OnInit, AfterViewInit {
    @ViewChildren('card') cards!: QueryList<ElementRef>;
    public songs!: Song[];
    public artists!: Artist[];

    constructor(private renderer: Renderer2, private songService: SongService, private artistService: ArtistService) { }

    ngOnInit(): void {
        this.getSongs();
        this.getArtists();
    }

    ngAfterViewInit() {

        this.cards.changes.subscribe(() => {
            this.setBackgroundColors();
        });
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

    public setBackgroundColors() {
        const fac = new FastAverageColor();
    
        this.cards.forEach(card => {
            const container = card.nativeElement;
            const imgElement = container.querySelector('img') as HTMLImageElement;
            const imageUrl = imgElement.src;
    
            this.convertImageToBase64(imageUrl)
                .then(base64data => {
                    imgElement.src = base64data;
    
                    fac.getColorAsync(imgElement)
                        .then(color => {
                            container.style.backgroundColor = color.rgba;
                            container.style.color = color.isDark ? '#fff' : '#000';
                        })
                        .catch(e => {
                            console.log(e);
                        });
                })
                .catch(e => {
                    console.log('Failed to fetch image:', e);
                });
        });
    }
    
    private convertImageToBase64(imageUrl: string): Promise<string> {
        return fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                return new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = () => {
                        const base64data = reader.result as string;
                        resolve(base64data);
                    };
                    reader.onerror = e => reject(e);
                });
            });
    }
}