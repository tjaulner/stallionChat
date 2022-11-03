import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Music } from 'src/app/models/music.model';
import { MusicstoreService } from 'src/app/shared/musicstore.service';

@Component({
  selector: 'app-searchmusic',
  templateUrl: './searchmusic.component.html',
  styleUrls: ['./searchmusic.component.css']
})
export class SearchmusicComponent implements OnInit {
  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

  constructor(private musicService: MusicstoreService) { }

  ngOnInit(): void {}

  onSearchMusic(value) {
    
    this.searchQuery.emit(value);

    this.musicService.clearCache();

    }

}
