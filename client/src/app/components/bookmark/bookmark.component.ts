import { Component} from '@angular/core';
import { NgSwitchCase } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoopBackAuth } from '../../shared/sdk/services';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent {

  private bookmarks;
  private authorization;
  constructor(private http: Http, private router: Router, private auth: LoopBackAuth) {

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
      .subscribe(data => {this.bookmarks = data; console.log('bookmarks received!'); },
        error => {
           console.log(error);
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

}
