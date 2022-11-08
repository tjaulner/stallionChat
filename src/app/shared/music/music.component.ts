import { Component, Input, OnInit } from '@angular/core';
import { LibraryComponent } from 'src/app/library/library.component';
import { Music } from 'src/app/models/music.model';
import { HTTPService } from '../http.service';
import { LibraryService } from '../libraryservice.service';
import { Song } from '../music-list';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  @Input() music;

  constructor(private libraryService: LibraryService, private httpService: HTTPService) { }

  ngOnInit(): void {
  }

  onSaveSong(music: Song) {
    this.libraryService.saveMusic(music);
    this.httpService.saveLibarytoFirebase(); // this auto-saves to firebase when user selects button save from store
    console.log(this.libraryService.library)
  }

}
