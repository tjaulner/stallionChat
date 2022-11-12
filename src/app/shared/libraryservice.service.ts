import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Music } from '../models/music.model';
import { Song } from './music-list';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  library: Song[] = [];

  songListChanged = new Subject<Song[]>();

  constructor() { }

  saveMusic(music: Song) {
    this.library.push(music);
    return this.library;
  }

  getMusic() {
    return this.library.slice();
  }

  removeSong(idx: number) {
    if(idx !== -1) {
    this.library.splice(idx, 1);
    this.songListChanged.next(this.library.slice());
    }

  }

  setMusic(music: Song[]) {
    this.library = music || [];
    this.songListChanged.next(this.library.slice());

  }

  updateSong(music) {
    const songRef = this.library.indexOf(music);
    console.log(songRef);
    return ( {songRef,  ...music});




  }



}


