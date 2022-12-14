import { Component, OnChanges, EventEmitter, OnInit, Output } from '@angular/core';
import { Music } from '../models/music.model';
import { LibraryService } from '../shared/libraryservice.service';
import { Song } from '../shared/music-list';
import { MusicstoreService } from '../shared/musicstore.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  music;


  constructor(private musicService: MusicstoreService, private libraryService: LibraryService) { }

  ngOnInit(): void {
  }

  searchSong(value) {
    this.musicService.musicSearchResults(value).subscribe(music => {
      this.music = music;
    })
  }

}
