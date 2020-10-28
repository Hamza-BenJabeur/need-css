import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-student-profil',
  templateUrl: './student-profil.component.html',
  styleUrls: ['./student-profil.component.css'],
})
export class StudentProfilComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  userData: any;
  ngOnInit(): void {
    console.log('mine=======>', this.local.message);
    const userToken = localStorage.getItem('token');
    var obj = {
      token: userToken,
    };
    // get all data for user
    this._http.userProfil(obj).subscribe((res) => {
      this.userData = res[0];
    });
  }
  navToEdit() {
    this.router.navigateByUrl('editStudent');
  }
  // search for other student profile
  searchProfil(profilName) {
    this._http.findProfil({ profilName }).subscribe((res) => {
      this.local.otherProfile = res[0];
      this.router.navigateByUrl('/resultSearch');
    });
  }
  takeMeToReports() {
    this.router.navigateByUrl('sendReport');
  }
  // feed(){
  //   this.router.navigateByUrl('/feed/student');
  // }
  samira(first, last, city, image, email, country, driving) {
    var obj = {
      firstName: first,
      lastName: last,
      city: city,
      image: image,
      email: email,
      country: country,
      driving:driving,
    };
    this._http.topdf(obj).subscribe((data) => {
      alert(data);
    });
  }
}
