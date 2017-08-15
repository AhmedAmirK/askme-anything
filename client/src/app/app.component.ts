import { Component } from '@angular/core';
import {UpperCasePipe}  from "@angular/common";
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoopBackAuth } from './shared/sdk/services';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean;
  image: string;
  username:string;

  constructor(
    private router: Router,
    private http: Http,
    private auth: LoopBackAuth
    )
  {

    if(this.loggedIn){

      this.http.get('/loggedin').map(res => res.json()).subscribe( res => {}, err => {
          this.onLogoutClick();

      });
    }

    if(this.loggedIn){

      this.http.get('/userdata').map(res => res.json()).subscribe( data => {

        this.image = data.image;
        this.username = data.username;
        localStorage.setItem('image',data.image);
        localStorage.setItem('username',data.username);
        this.loggedIn = true;
      }, err => console.log(err));

  }

    if(this.auth.getAccessTokenId()){
      this.setLoggedIn(true)
    }
    else this.setLoggedIn(false)
  }

  setLoggedIn(b :boolean){

    if(b){
      this.image = localStorage.getItem('image');
      this.username = localStorage.getItem('username');

      if(this.username==null){

      }
    }

    this.loggedIn = b;
  }

  // Function to logout user
  onLogoutClick() {
    this.setLoggedIn(false);
    this.auth.clear();
    this.http.get('/auth/logout');
    localStorage.clear();
    this.router.navigate(['/']); // Navigate back to home page
  }

}
