import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';


const APP_ROUTES  = [
  // {path: '#home', redirectTo: '', pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'bookmark', component: BookmarkComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
