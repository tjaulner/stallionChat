import { Component, Input, OnInit } from '@angular/core';
import { HTTPService } from 'src/app/shared/http.service';
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

  constructor(private libraryService: LibraryService, private http: HTTPService) { }

  ngOnInit(): void {
    this.myLibrary = this.libraryService.getMusic();

    this.libraryService.songListChanged.subscribe((music: Song[]) => {
      this.myLibrary = music;
    })
  }

  remove(music) {
    const item = this.libraryService.library.indexOf(music);
    this.libraryService.removeSong(item);
    this.http.saveLibarytoFirebase();
  }



}
