import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.css'],
})
export class ProfileCompanyComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}

  userData: any;

  ngOnInit(): void {
    const userToken = localStorage.getItem('token');
    var obj = {
      token: userToken,
    };
    // get the data of company
    this._http.compantProfil(obj).subscribe((res) => {
      this.userData = res[0];
      this.local.companyInfo.owner = res[0].owner;
      this.local.companyInfo.email = res[0].email;
    });
  }
  // redirect to company edit profile component
  updateCompany() {
    this.router.navigateByUrl('/editCompany');
  }
  // search profile student
  searchProfil(profilName) {
    this._http.findProfil({ profilName }).subscribe((res) => {
      this.local.otherProfile = res;
      this.router.navigateByUrl('/resultSearch');
    });
  }
  ///////////////////////// redirect user //////////////////
  feed() {
    this.router.navigateByUrl('/post/company');
  }
  ownPosts() {
    this.router.navigateByUrl('/companyOwnPost');
  }
  studentApply() {
    this.router.navigateByUrl('notification');
  }
}
