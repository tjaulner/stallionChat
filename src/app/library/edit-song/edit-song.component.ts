import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  editSongForm: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.editSongForm = new FormGroup({
      artist: new FormControl(null),
      song: new FormControl(null),
      album: new FormControl(null),
      genre: new FormControl(null),
      isFavorite: new FormControl(null)
    });
  }

  onFormSubmit(){
    this.submitted = true;

  }

}
