import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { AppRoutingModule } from './app-routing.module';
import { SDKBrowserModule } from './shared/sdk/index';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';

import { AuthGuard } from './guards/auth.guard';
import {Autosize} from 'angular2-autosize/src/autosize.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BookmarkComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    AppRoutingModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
