import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { LibraryComponent } from './library/library.component';
import { WallComponent } from './wall/wall.component';
import { HomeComponent } from './home/home.component';
import { InputmusicComponent } from './store/inputmusic/inputmusic.component';
import { SearchmusicComponent } from './store/searchmusic/searchmusic.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MusicComponent } from './shared/music/music.component';
import { SongListComponent } from './library/song-list/song-list.component';
import { EditSongComponent } from './library/edit-song/edit-song.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    LibraryComponent,
    WallComponent,
    HomeComponent,
    InputmusicComponent,
    SearchmusicComponent,
    LoginComponent,
    SignupComponent,
    MusicComponent,
    SongListComponent,
    EditSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
