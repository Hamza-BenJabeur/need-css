import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
@Component({
  selector: 'app-post-center',
  templateUrl: './post-center.component.html',
  styleUrls: ['./post-center.component.css'],
})
export class PostCenterComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  imageUrl: any;
  centerData: any;
  ngOnInit(): void {
    this.centerData = {
      numberOfPosts: this.local.tsInfo.postsNumber,
      id: this.local.tsInfo.id,
    };
  }
  // add post
  add(image, title, description, salary) {
    var obj = {
      title: title,
      description: description,
      image: image,
      owner: this.local.tsInfo.owner,
      rate: 11,
      salary: salary,
      contact: this.local.tsInfo.email,
      idCenter: this.centerData.id,
      newNumberOfPosts: this.centerData.numberOfPosts - 1,
    };
    if (this.centerData.numberOfPosts !== 0) {
      this._http.httpAddPostCenter(obj).subscribe((data) => {
        this.profile();
      });
    } else {
      alert('you dont have the right to post');
    }
  }
  imgUpload(img) {
    console.log('IMG FROM VER==> ', img.target.files[0]);
    // THE IMAGE NEED TO BE INSIDE A FORMDATA OBJECT
    // CREATE A VARIABLE TO BE AN INSTANCE OF FORMDATA
    var formData = new FormData();
    // WE APPEND AN OBJECT WITH KEY OF img AND A VALUE OF OUR IMAGE FILE
    formData.append('img', img.target.files[0]);
    // SENDING OUR FORMDATA TO SERVICE
    this._http.uploadImg(formData).subscribe((resp) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log('RESP====> ', resp['msg'].url);
      this.imageUrl = resp['msg'].url;
    });
  }
  // redirect to profile
  profile() {
    this.router.navigateByUrl('/center/profile');
  }
}
