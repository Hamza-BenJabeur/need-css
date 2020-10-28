import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
@Component({
  selector: 'app-tc-posts',
  templateUrl: './tc-posts.component.html',
  styleUrls: ['./tc-posts.component.css'],
})
export class TcPostsComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  userData: any;
  userPosts: any;
  ngOnInit(): void {
    const userToken = localStorage.getItem('token');
    var obj = {
      token: userToken,
    };
    this._http.tcProfil(obj).subscribe((res) => {
      // GET center data
      this.userData = res[0];
      this.local.tsInfo = {
        owner: this.userData.owner,
        email: this.userData.email,
      };
      var object = { owner: this.userData.owner };
      // get all the posts of the center
      this._http.httpgetTcPosts(object).subscribe((res) => {
        this.userPosts = res;
      });
    });
  }
  // redirect to update profile
  updateProfil() {
    this.router.navigateByUrl('/editTc');
  }
  // Search profile user
  searchProfil(profilName) {
    this._http.findProfil({ profilName }).subscribe((res) => {
      this.local.otherProfile = res[0];
      this.router.navigateByUrl('/resultSearch');
    });
  }
  ///////////////// redirect /////////////////
  toPost() {
    this.router.navigateByUrl('/post/center');
  }
  about() {
    this.router.navigateByUrl('/center/profile');
  }
  // redirect to post modify component
  handleClick(post) {
    this.local.post = post;
    this.router.navigateByUrl('/modify/tc/posts');
  }
  // delete post by id
  delete(id) {
    var obj = {
      id: id,
    };
    this._http.httpdeletePostTc(obj).subscribe((data) => {
      alert('post deleted :)');
      this.ngOnInit();
    });
  }
}
