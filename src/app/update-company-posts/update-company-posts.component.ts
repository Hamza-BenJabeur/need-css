import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-update-company-posts',
  templateUrl: './update-company-posts.component.html',
  styleUrls: ['./update-company-posts.component.css'],
})
export class UpdateCompanyPostsComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  onePost: any;
  ngOnInit(): void {
    // get post data
    this.onePost = this.local.post;
  }
  // modify post and redirect
  saveVal([], [], id) {
    this._http.postsToModify(arguments).subscribe((data) => {
      alert('data sended');
    });
    this.router.navigateByUrl('companyOwnPost');
  }
}
