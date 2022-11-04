import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../shared/libraryservice.service';
import { Song } from '../shared/music-list';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  myLibrary: Song[] = []
  music

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.myLibrary = this.libraryService.getMusic();

    this.libraryService.songListChanged.subscribe((music: Song[]) => {
      this.myLibrary = music;
  })
}

onRemoveSong(idx: number) {
  this.libraryService.removeSong(idx);


}


}
