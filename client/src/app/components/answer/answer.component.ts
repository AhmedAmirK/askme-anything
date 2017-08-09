import { Component, Input  } from '@angular/core';

@Component({
  selector: 'answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent  {

@Input() answer: string;

 constructor() { }

}
