import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter, Observable, tap } from 'rxjs';
import { HTTPService } from 'src/app/shared/http.service';
import { LibraryService } from 'src/app/shared/libraryservice.service';
import { Song } from 'src/app/shared/music-list';
import { EditSongComponent } from '../edit-song/edit-song.component';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  myLibrary: Song[] = []
  @Input() music;
  selectedSong: Song;
  private dialogRef: MatDialogRef<EditSongComponent>

  constructor(
    private libraryService: LibraryService,
    private http: HTTPService,
    private readonly dialog: MatDialog) { }

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


  onEditSong(music) {
    this.dialogRef = this.dialog.open(EditSongComponent, {
      data: { artist: music.artistName,
              songName: music.trackName,
              album: music.collectionName,
              genre: music.primaryGenreName },
      width: '300px',
      height: '500px',

    });

    //this.dialogRef
      //.afterClosed()
      //.pipe(
        //filter(Boolean),
        //tap((music) => this.libraryService.updateSong(music)),
        //tap((music) => this.selectSong(music)),
      //)
      //.subscribe();
  }

  //selectSong(music: Song) {
    //this.selectedSong = music;
  //}



}
