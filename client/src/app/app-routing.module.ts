import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';

import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES  = [
  // {path: '#home', redirectTo: '', pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'home/:token/:userId', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'bookmark', component: BookmarkComponent},
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
  providers: [AuthGuard],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
