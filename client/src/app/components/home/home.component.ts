import { Component, Optional } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgSwitchCase } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SDKToken } from '../../shared/sdk/models';
import { LoopBackAuth } from '../../shared/sdk/services';
import { LoopBackConfig }  from '../../shared/sdk';

import { AppComponent } from '../../app.component'
import 'rxjs/add/operator/map';
import {Clipboard} from 'ts-clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  view: string;
  q: string;
  Answers: any;
  dataViewed: any[];
  AnswersData: string[];
  ServiceData: any[];
  servicesViewed: any[];
  noAnswers: boolean;
  noServices: boolean;
  loading: boolean;
  show: string;
  more: boolean;
  hometitle: string;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private auth: LoopBackAuth,
    @Optional() private appcomponent: AppComponent ) {

    // LoopBackConfig.setBaseURL('http://localhost:3000');
    // LoopBackConfig.setApiVersion('api');
    this.noServices= true;
    this.loading= true;
    this.more = false;
    this.servicesViewed = [];
    this.view = "question";
    this.show = "Show More";

    if(localStorage.getItem('question')){
      this.q = localStorage.getItem('question');
    }

   
      
   this.hometitle = "Askme-anything is a web application that delivers a huge number of frequently asked questions about IBM and its Bluemix platform.";

    this.route.params.subscribe( (p: Params) => {

        let t = p['token'];
        let user = p['userId'];

        if(t && user){

          let token = new SDKToken();
          token.id = t;
          token.userId = user;
          console.log(token);
          this.auth.setToken(token);
          this.auth.setRememberMe(true);
          this.auth.save();
          this.appcomponent.setLoggedIn(true);
        }
      
      
    });

      if(this.auth.getAccessTokenId()){
        console.log(this.auth.getAccessTokenId());
         this.appcomponent.setLoggedIn(true);
       }
       else this.appcomponent.setLoggedIn(false);


  }


  switch(){

    if(this.q){
      if(this.q.replace(/\s+/g, '')=="" ){
        alert("Please enter a question first!");
        return;
      }
    }
   else {
     alert("Please enter a question first!");
     return;
   }

   localStorage.setItem('question',this.q);
    
    this.http.post('/question', {question: this.q}).map(res=>res.json()).subscribe(data => {

      if(data){

        console.log(data);

        this.loading = false;

        this.show = "Show More";

        this.AnswersData = data.answers;
        
        this.ServiceData = data.services;

       if (this.ServiceData.length==0 || this.ServiceData===undefined) {
         this.noServices= true;
       } else this.noServices=false;
    

       if(this.ServiceData.length<=3){
         this.servicesViewed = this.ServiceData;
         this.more = false;
       } else {
         this.servicesViewed=[];
         this.more = true;
         for (var i = 0; i < 3; i++) {
           this.servicesViewed.push(this.ServiceData[i]);
         }
       }

       //Getting Answers and Setting bookmarks
        this.dataViewed= [];
        this.AnswersData.forEach( answer => {
          var a = {
            ans: answer,
            bookmarked: false
          }
          this.dataViewed.push(a);
        });

       if(this.dataViewed.length==0){
         this.noAnswers= true;
       }


      }

    }, error => {
      alert('Something went wrong!');
      console.log(error);
    });

    this.view = "answer";
  }

  viewMore(show){

    switch (show) {
      case "Show More":
        this.show = "Show Less";
        this.servicesViewed = this.ServiceData.slice();
        break;
      case "Show Less":
        this.show = "Show More";
        this.servicesViewed.splice(3,this.servicesViewed.length - 3);
        break;
    }

    
  }

  askAgain(){
    this.servicesViewed = [];
    this.dataViewed = [];
    this.loading = true;
    this.noServices = true;
    this.more = false;
    this.switch();
  }

  askIBM(){

    this.http.post('/askibm', { question: this.q}).subscribe (res => {

      //localStorage.removeItem('question');
      this.hometitle = "Your question was sent to IBM and you will receive an answer shortly. Sorry for any inconveniences";
      this.view = "question";

    }, err => {
      alert('Couldnt Ask IBM!');
      console.log(err);
    });

  }

  bookmark(answer, index){

    if (!this.appcomponent.loggedIn) {
      alert('Please Log In first');
      return;
    }

    this.http.post('/bookmarks', {question: this.q, ans: answer}).subscribe(res => {
      this.dataViewed[index].bookmarked = true;
    }, err => alert(err));
  }

  Copy(answer){
    Clipboard.copy(answer.ans);
  }
}
