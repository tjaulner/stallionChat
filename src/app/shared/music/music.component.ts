import { Component, Input, OnInit } from '@angular/core';
import { LibraryComponent } from 'src/app/library/library.component';
import { Music } from 'src/app/models/music.model';
import { LibraryService } from '../libraryservice.service';
import { Song } from '../music-list';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  @Input() music;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }

  onSaveSong(music: Song) {
    this.libraryService.saveMusic(music);
    console.log(this.libraryService.library)
  }

}
