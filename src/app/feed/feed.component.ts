import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  posts: any;
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // get all the posts
    this._http.httpGetPosts().subscribe((data) => {
      this.posts = data;
    });
  }
  // redirect to see all the data in post component
  seeMore(post) {
    this.local.onePost = post;
    this.router.navigateByUrl('/post');
  }
}
