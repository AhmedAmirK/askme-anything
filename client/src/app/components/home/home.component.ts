
// ANGULAR IMPORTS
import { Component, Optional, ElementRef, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgSwitchCase } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppComponent } from '../../app.component';
import { AnswerComponent } from '../answer/answer.component'

//LOOPBACK SDK IMPORTS
import { SDKToken } from '../../shared/sdk/models';
import { LoopBackAuth } from '../../shared/sdk/services';

// EXTERNAL LIBRARIES
import 'rxjs/add/operator/map';
import  anchorme  from 'anchorme';
import {Clipboard} from 'ts-clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked{
  view: string;           //Shows Question Template or Answers Template
  q: string;              //Question user entered
  dataViewed: any[];         //Answers viewed
  lowerScoreData: any[];
  AnswersData: any[];  //Answers Recieved from the server
  ServiceData: any[];
  servicesViewed: any[];
  noAnswers: boolean;
  noServices: boolean;
  loading: boolean;
  show: string;           //Show more or less button
  more: boolean;
  hometitle: string;
  showingLowScores: boolean;
  lowScores:boolean;
  askibmtitle: string;


  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private auth: LoopBackAuth,
    @Optional() private appcomponent: AppComponent ) {

    this.noServices= true;
    this.loading= true;
    this.more = false;
    this.servicesViewed = [];
    this.view = "question";
    this.show = "Show More";
    this.showingLowScores = false;
    this.lowScores = false;

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
          this.auth.setToken(token);
          this.auth.setRememberMe(true);
          this.auth.save();

          this.http.get('/userdata').map(res => res.json()).subscribe( data => {

            localStorage.setItem('image', data.image);

            localStorage.setItem('username',data.username);

            this.appcomponent.setLoggedIn(true);

          }, err => console.log(err));

        }


    });

      if(this.auth.getAccessTokenId()){
         this.appcomponent.setLoggedIn(true);
       }
       else this.appcomponent.setLoggedIn(false);


  }


//User Asked a Question, fetch data and switch view to answers
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

   this.noAnswers= false;

    this.http.post('/question', {question: this.q}).map(res=>res.json()).subscribe(data => {

      if(data){

        console.log(data)

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
        this.lowerScoreData = [];
        this.AnswersData.forEach( answer => {
          var a = {
            ans: anchorme(answer.answer, {attributes:[
              {
                name : "style",
                value: "color:blue"
              },
              {
                name : "target",
                value: "_blank"
              }
             ]}),
            score: Math.ceil(answer.score*100),
            link: answer.link,
            bookmarked: false
          }
          if(a.score>=80)
          this.dataViewed.push(a);
        else {this.lowerScoreData.push(a); this.lowScores= true; }
        });

       if(this.dataViewed.length==0 && this.lowerScoreData.length==0){
         this.noAnswers= true;
       }




      }

    }, error => {
      console.log(error);
    });

    this.view = "answer";
   
  }

//Clicked Show more or less button
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

  getStyle(score){

    if(score>80){
      return "green";
    }

    if(score>60){
      return "orange";
    }

    return "red";

  }

  askAgain(){
    this.servicesViewed = [];
    this.dataViewed = [];
    this.loading = true;
    this.noServices = true;
    this.more = false;
    this.showingLowScores = false;
    this.lowScores = false;
    this.switch();
  }

  askIBM(){

    this.http.post('/askibm', { question: this.q}).subscribe (res => {

      this.hometitle = "Your question was sent to IBM and you will receive an answer shortly. Sorry for any inconveniences";
      this.view = "question";

    }, err => {
      console.log(err);
    });

  }

  viewLowScores(){
    this.dataViewed = this.dataViewed.concat(this.lowerScoreData);

    this.showingLowScores = true;
    
  }

  bookmark(answer, index){

    if (!this.appcomponent.loggedIn) {
      alert('Please Log In first');
      return;
    }

    this.http.post('/bookmarks', {question: this.q, ans: answer, link: answer.link}).subscribe(res => {
      this.dataViewed[index].bookmarked = true;
    }, err => console.log(err));
  }

  Copy(answer){
    Clipboard.copy(answer.ans);
  }

  ngAfterViewChecked () {

    let elements = document.getElementsByClassName('answer');

    for(var i=0; i< elements.length;i++){
      let element = elements[i];
      let answer = this.dataViewed[i].ans;
      element.innerHTML =answer;
    }

    if(this.appcomponent.loggedIn)
      this.askibmtitle = "Send your question to IBM";
    else this.askibmtitle= "Please Log In first";

  }
}
