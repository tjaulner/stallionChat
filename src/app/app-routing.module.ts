import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { LibraryComponent } from './library/library.component';
import { InputmusicComponent } from './store/inputmusic/inputmusic.component';
import { SearchmusicComponent } from './store/searchmusic/searchmusic.component';
import { StoreComponent } from './store/store.component';
import { WallComponent } from './wall/wall.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'store', component: StoreComponent, children: [
    {path: 'input', component: InputmusicComponent},
    {path: 'api', component: SearchmusicComponent}
  ]},
  {path: 'library', component: LibraryComponent},
  {path: 'wall', component: WallComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
