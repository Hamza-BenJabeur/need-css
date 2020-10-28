import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private local: LocalService, private router: Router) {}
  post: any;
  ngOnInit(): void {
    // get one post
    this.post = this.local.onePost;
  }
}
