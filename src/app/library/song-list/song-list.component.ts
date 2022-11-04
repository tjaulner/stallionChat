import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/shared/libraryservice.service';
import { Song } from 'src/app/shared/music-list';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  myLibrary: Song[] = []
  @Input() music;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.myLibrary = this.libraryService.getMusic();

    this.libraryService.songListChanged.subscribe((music: Song[]) => {
      this.myLibrary = music;
    })
  }

  remove(music) {
    this.libraryService.removeSong(music);
  }



}
