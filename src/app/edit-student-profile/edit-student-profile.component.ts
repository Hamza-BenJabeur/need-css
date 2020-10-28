import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student-profile',
  templateUrl: './edit-student-profile.component.html',
  styleUrls: ['./edit-student-profile.component.css'],
})
export class EditStudentProfileComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router) {}
  user: any;
  ngOnInit(): void {
    //get token from localStorage 
    this.user = localStorage.getItem('token');
  }
// update the student profile 
  update(arr1, arr2, userToken) {
    this._http.updateData(arguments).subscribe((data) => {});
    this.router.navigateByUrl('studentProfile');
  }
}
