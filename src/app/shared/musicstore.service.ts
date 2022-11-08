import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Music } from '../models/music.model';
import { Observable } from 'rxjs/internal/Observable';
import { MusicList } from './music-list';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicstoreService {
  iTunesUrl = 'https://itunes.apple.com/search';
  //iTunesUrl = 'https://quipvid.com/api/quips';
  musicList: Observable<MusicList[]>;

  constructor(private http: HttpClient) { }

  musicSearchResults(queryString): Observable<MusicList[]> {

    if (!this.musicList) {
    this.musicList = this.http.get<MusicList[]>(`${this.iTunesUrl}?term=${queryString}`).pipe(
      publishReplay(1),
      refCount()
    );
    }

    return this.musicList;

  }

  clearCache() {
    this.musicList = null;
  }
}

