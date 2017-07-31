import { Component, OnInit } from '@angular/core';
import { NgSwitchCase } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  private data;
  constructor(private http: Http) {
  this.http.get('/bookmarks').map(res=>res.json())
  .subscribe(data => this.data = data,
  error => alert(error)
);
  }
    delete(bookmark_ID){
      this.http.delete('/bookmarks/' + bookmark_ID).subscribe();
    }
  ngOnInit() {
  }



}
