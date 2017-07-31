import { Component, OnInit } from '@angular/core';
import { NgSwitchCase } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Clipboard} from 'ts-clipboard';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private view = "question";
private q;
private rate = 0;
private login = false;
Answers;
AnswersData;

constructor(private http: Http) {}

switch(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.http.post('/', {question: this.q}, {headers: headers}).map(res=>res.json())
    .subscribe(data => this.Answers = data,
    error => alert(error),
    ()=>  this.AnswersData = this.Answers.answers
    //  ()=>  this.AnswersData = JSON.parse(this.Answers.answer).filter(element => element.score >= 0.5)
    );
    this.view = "answer";
  }

bookmark(answer){
    this.http.post('/bookmarks', {question: this.q, ans: answer}).subscribe();
  }
Copy(answer){
    Clipboard.copy(answer);
  }

ngOnInit() {
  }
}
