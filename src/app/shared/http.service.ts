import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibraryService } from './libraryservice.service';
import { Song } from './music-list';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  firebaseRootURL = "https://stallionchat-default-rtdb.firebaseio.com/library.json";
  baseUrl = "https://stallionchat-default-rtdb.firebaseio.com/library";

  constructor(private http: HttpClient, private libraryService: LibraryService) { }

  // save to Firebase
  saveLibarytoFirebase() {
    const music = this.libraryService.getMusic();
    this.http.put(this.firebaseRootURL, music).subscribe(res => {
      console.log("Firebase DB Response:", res);
    });
  }

  // Fetch from Firebase
  fetchLibraryFromFirebase() {
    return this.http.get(this.firebaseRootURL, {}).subscribe((res: Song[] | []) => {
      this.libraryService.setMusic(res);
    });
  }

  //getByID(id: string) {
    //return this.http.get<Song>(`${this.baseUrl}/${id}`);
  //}

  //update(id: string, params: any){
    //return this.http.put(`${this.baseUrl}/${id}`, params);
  //}


}


