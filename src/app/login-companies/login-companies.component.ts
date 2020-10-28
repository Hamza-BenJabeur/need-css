import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-companies',
  templateUrl: './login-companies.component.html',
  styleUrls: ['./login-companies.component.css'],
})
export class LoginCompaniesComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  token: any = '';
  ngOnInit(): void {}
  // redirect to sign up
  signup() {
    this.router.navigateByUrl('/signup/company');
  }
  collectLogCompanies(name, password) {
    // save the username in the local storage
    this.local.message = name.value;
    const obj = {
      name: name.value,
      password: password.value,
    };
    // log and acording to the user data redirect him
    this._http.loginCompanies(obj).subscribe((data) => {
      this.token = data['token'];
      localStorage.setItem('token', this.token);
      this._http.httpgetCompanyState({ name: name.value }).subscribe((data) => {
        var c1 =
          data[0].verification === 'true' &&
          data[0].verRequest === 'true' &&
          data[0].firstTime === 'false';
        var c2 =
          data[0].verification === 'true' &&
          data[0].verRequest === 'true' &&
          data[0].firstTime === 'true';
        var c3 =
          data[0].verification === 'false' &&
          data[0].verRequest === 'false' &&
          data[0].firstTime === 'true';
        var c4 =
          data[0].verification === 'false' &&
          data[0].verRequest === 'true' &&
          data[0].firstTime === 'true';

        if (c1) {
          this.router.navigateByUrl('/company/profile');
        } else if (c2) {
          this.router.navigateByUrl('/register/company');
        } else if (c3) {
          this.router.navigateByUrl('/verification/request/company');
        } else if (c4) {
          this.router.navigateByUrl('/wait');
        }
      });
    });
  }
}
