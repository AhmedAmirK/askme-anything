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

    this.http.get('/loggedin').subscribe( res => {}, err => {
      this.onLogoutClick();

    })


    if(this.auth.getAccessTokenId()){
      console.log(this.auth.getAccessTokenId());
      this.loggedIn = true;
    }
    else this.loggedIn = false;
  }

  setLoggedIn(b :boolean){

    if(b){
      this.image = localStorage.getItem('image');
      this.username = localStorage.getItem('username');
    }

    this.loggedIn = b;
  }

  // Function to logout user
  onLogoutClick() {
    this.setLoggedIn(false);
    this.auth.clear();
    this.http.get('/auth/logout');
    //localStorage.clear();
    this.router.navigate(['/']); // Navigate back to home page
  }

}
