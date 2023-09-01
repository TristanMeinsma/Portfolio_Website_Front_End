import { ChangeDetectorRef, Component, ElementRef, Host, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'artist-view',
    templateUrl: './artist.view.component.html',
    styleUrls: ['./artist.view.component.css']
})
export class ArtistViewComponent implements OnInit {
    public artists!: Artist[];

    @ViewChild('previewContainer') previewContainer!: ElementRef;

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        const rect = this.previewContainer.nativeElement.getBoundingClientRect();
        if (rect.top + rect.height * 0.5 <= window.innerHeight && rect.bottom >= 0) {
            this.previewContainer.nativeElement.style.opacity = '1';
        }
    }

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
}