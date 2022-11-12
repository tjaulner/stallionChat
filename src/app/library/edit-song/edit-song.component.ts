import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Music } from 'src/app/models/music.model';
import { HTTPService } from 'src/app/shared/http.service';
import { LibraryService } from 'src/app/shared/libraryservice.service';
import { Song } from 'src/app/shared/music-list';
import { SongListComponent } from '../song-list/song-list.component';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  editSongForm: FormGroup;
  submitted = false;


  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditSongComponent>,
    @Inject(MAT_DIALOG_DATA) public music: Music,
    private http: HTTPService,
    private libraryService: LibraryService

  ) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.editSongForm = this.formBuilder.group({
      artist: [this.music.artist],
      song: [this.music.songName],
      album: [this.music.album],
      genre: [this.music.genre],
    });
  }

  onFormSubmit(){
    this.dialogRef.close({ ...this.music, ...this.editSongForm.value })
    console.log(this.dialogRef)
    
  }


}
