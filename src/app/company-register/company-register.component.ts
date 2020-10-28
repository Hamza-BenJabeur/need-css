import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css'],
})
export class CompanyRegisterComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  imageUrl: any;
  obj: any;
  ngOnInit(): void {}

  takedata(
    email,
    owner,
    field,
    numberOfEmployee,
    location,
    website,
    logo,
    about
  ) {
    this.obj = {
      email: email,
      owner: owner,
      field: field,
      numberOfEmployee: numberOfEmployee,
      location: location,
      website: website,
      logo: logo,
      about: about,
      name: this.local.message,
    };
    //  add the data of the company to its table
    this._http.httpRegisterCompany(this.obj).subscribe((data) => {
      this.router.navigateByUrl('/company/profile');
    });
  }
  // upload the image to cloudinairy
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
