import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
  constructor(private _http: HttpService , private router : Router) {}
  ngOnInit(): void { }
  signin() {
    this.router.navigateByUrl('/signin/student');
  }
  // sign up student 
  collect(username, email, secretinfo, password) {
    var obj = { username, email, secretinfo, password };
    this._http.register(obj).subscribe((data) => {
      this.router.navigateByUrl('/signin/student');
    });
  }
}