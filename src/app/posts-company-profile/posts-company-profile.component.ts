import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-posts-company-profile',
  templateUrl: './posts-company-profile.component.html',
  styleUrls: ['./posts-company-profile.component.css'],
})
export class PostsCompanyProfileComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  compPosts: any;
  ngOnInit(): void {
    this._http.findCompanyPosts(this.local.companyInfo).subscribe((data) => {
      this.compPosts = data;
    });
  }
  // save the data of post in local service the redirect to update component
  editPost(post) {
    this.local.post = post;
    this.router.navigateByUrl('updateCompPost');
  }
  //delete post by id
  deletePost(id) {
    var obj = { id };
    this._http.deleteCompanyPosts(obj).subscribe((data) => {
      alert('post removed');
      this.ngOnInit();
    });
  }
  // redirect to profile
  backToProfile() {
    this.router.navigateByUrl('company/profile');
  }
}
