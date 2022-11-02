import { Component, Input, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  @Input() music;
  player = new Audio;

  libary = [];

  constructor() { }

  ngOnInit(): void {
  }

  playSong(audio) {
    this.player.src = audio.previewUrl;
    this.player.play();
  }
  stopSong(audio) {
    this.player.pause();
  }

  addSongToLibary(music) {
    this.libary.push(music);
    console.log(this.libary);

  }
}
