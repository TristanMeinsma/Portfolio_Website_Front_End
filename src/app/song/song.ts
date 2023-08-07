import { Artist } from "../artist/artist";

export interface Song {
    songId: number;
    title: string;
    artists: Artist[];
    imageUrl: string;
    spotifyLink: string;
    soundPreview: string;
}