import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-training-center-edit',
  templateUrl: './training-center-edit.component.html',
  styleUrls: ['./training-center-edit.component.css'],
})
export class TrainingCenterEditComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  tcToken: String = '';
  ngOnInit(): void {
    this.tcToken = localStorage.getItem('token');
  }
  // update profile training center
  takedata([], [], token) {
    this._http.updateTCData(arguments).subscribe((data) => {
      this.router.navigateByUrl('center/profile');
    });
  }
}
