import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-training-center-register',
  templateUrl: './training-center-register.component.html',
  styleUrls: ['./training-center-register.component.css'],
})
export class TrainingCenterRegisterComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  obj: any;
  imageUrl: any;
  ngOnInit(): void {}
  takedata(
    email,
    owner,
    trainingOptions,
    numberOfStudent,
    location,
    website,
    logo,
    about
  ) {
    this.obj = {
      email: email,
      owner: owner,
      trainingOptions: trainingOptions,
      numberOfStudent: numberOfStudent,
      location: location,
      website: website,
      logo: logo,
      about: about,
      name: this.local.message,
    };
    // get data of training center and add it to database
    this._http.httpRegisterTrainingCenter(this.obj).subscribe((data) => {
      this.router.navigateByUrl('/center/profile');
    });
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
}
