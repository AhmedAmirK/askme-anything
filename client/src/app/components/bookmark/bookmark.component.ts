import { Component,  Optional, AfterViewChecked} from '@angular/core';
import { NgSwitchCase } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoopBackAuth } from '../../shared/sdk/services';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppComponent } from '../../app.component';
import  anchorme  from 'anchorme';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements AfterViewChecked {

  private bookmarks;
  private authorization;
  constructor(
    private http: Http,
    private router: Router,
    @Optional() private appcomponent: AppComponent,
    private auth: LoopBackAuth) {

    if(this.auth.getAccessTokenId()){

      this.authorization = { Authorization: this.auth.getAccessTokenId() };

      // this.http.get('/checkloggedIn', {headers: this.authorization}).map((res: Response)=> res.json())
      // .subscribe(data => {
      //       this.http.get('/bookmarks', { headers : this.authorization }).map( (res: Response) => res.json())
      //       .subscribe(data => {this.bookmarks = data; console.log('bookmarks received!'); },
      //         error => {
      //            console.log(error);
      //    });
      // }, error => {

      // })

      this.http.get('/bookmarks', { headers : this.authorization }).map( (res: Response) => res.json())
      .subscribe(data => {

        this.bookmarks = data; 
        console.log('bookmarks received!'); 

        for(var i=0; i<data.length;i++){
          var ans = anchorme(data[i].answer, {attributes: [
            {
             name: "style",
             value: "color:blue"             
            },

            {
              name: "target",
              value: "_blank"
            }
            ]});
          this.bookmarks[i].answer = ans;
        }

      },
        error => {
            this.appcomponent.onLogoutClick();
            
         });

    }


     else this.router.navigate(['/']);

  }
  delete(bookmark_ID, markIndex){
      this.http.delete('/bookmarks/' + bookmark_ID).subscribe(data => this.bookmarks.splice(markIndex,1),
       err =>{
         alert('Couldnt Delete Bookmark!');
         console.log(err);
       });
  }

  ngAfterViewChecked () {

      let elements = document.getElementsByClassName('answer');

      for(var i=0; i< elements.length;i++){
        let element = elements[i];
        let answer = this.bookmarks[i].answer;
        element.innerHTML =answer;
      }

    }

}
