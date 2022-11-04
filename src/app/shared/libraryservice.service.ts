import { Injectable } from '@angular/core';
import { Music } from '../models/music.model';
import { Song } from './music-list';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  library: Song[] = [];

  constructor() { }

  saveMusic(music: Song) {
    this.library.push(music);
  }

}


