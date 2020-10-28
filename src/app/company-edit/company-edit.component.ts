import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css'],
})
export class CompanyEditComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  tokenCompany: String = '';
  ngOnInit(): void {
    // get the token from the local storage
    this.tokenCompany = localStorage.getItem('token');
  }
  // update company profile by token
  takedata([], [], token) {
    this._http.updateCompanyData(arguments).subscribe((data) => {
      alert('secces');
    });
  }
  // go back to profile
  backProfile() {
    this.router.navigateByUrl('/company/profile');
  }
}
