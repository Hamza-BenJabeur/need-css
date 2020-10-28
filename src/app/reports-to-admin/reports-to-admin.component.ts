import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reports-to-admin',
  templateUrl: './reports-to-admin.component.html',
  styleUrls: ['./reports-to-admin.component.css'],
})
export class ReportsToAdminComponent implements OnInit {
  RegistrationFrom : any
  // FormGroup : any

  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  

  ngOnInit(): void {}

  username = new FormControl('');
  typeOfUser = new FormControl('');
  message = new FormControl('');

  // console.log(name)
  submitForm(username, typeOfUser, message){
    let obj = {username, typeOfUser, message}
    console.log(obj)
    if(!obj.message){
      alert("your msg please")
      return;
    }
    console.log(obj)
    this._http.usersReport(obj).subscribe((data)=>{})
    }
  

}
