import { Artist } from "./artist";

export interface Song {
    id: number;
    title: string;
    artists: Artist[];
    imageUrl: string;
    spotifyLink: string;
}