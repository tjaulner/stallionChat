import { Component, Input, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  @Input() music;

  constructor() { }

  ngOnInit(): void {
  }


  addSongToLibary() {

  }
}
