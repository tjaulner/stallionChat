import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../shared/http.service';
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

  constructor(private libraryService: LibraryService, private httpService: HTTPService) { }

  ngOnInit(): void {
    this.myLibrary = this.libraryService.getMusic();

    this.libraryService.songListChanged.subscribe((music: Song[]) => {
      this.myLibrary = music;
  })
}

  saveData() {
    this.httpService.saveLibarytoFirebase();
  }

  fetchData() {
    this.httpService.fetchLibraryFromFirebase();
  }




}
