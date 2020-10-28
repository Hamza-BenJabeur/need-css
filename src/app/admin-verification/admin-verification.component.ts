import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-verification",
  templateUrl: "./admin-verification.component.html",
  styleUrls: ["./admin-verification.component.css"],
})
export class AdminVerificationComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router) {}
  NonValidStudents: any;
  NonValidCompanies: any;
  NonValidCenters: any;
  ngOnInit(): void {
    //invoke all the get data functions
    this.getData();
    this.getCompany();
    this.getCenters();
  }
  // get the non verified students
  getData() {
    this._http.httpGetNonVerifiedStudents().subscribe((data) => {
      console.log(data);
      this.NonValidStudents = data;
    });
  }
  // get the non verified companies
  getCompany() {
    this._http.httpGetNonVerifiedCompanies().subscribe((data) => {
      console.log(data);
      this.NonValidCompanies = data;
    });
  }
  // get the non verified training centers
  getCenters() {
    this._http.httpGetNonVerifiedCenters().subscribe((data) => {
      console.log(data);
      this.NonValidCenters = data;
    });
  }

  ////////////////////////////////  Verification Student //////////////////////////////////////////
  verifie(username) {
    this._http.httpVerifyStudent({ username: username }).subscribe((data) => {
      this.getData();
    });
  }

  reject(username) {
    this._http.httprejectStudent({ username: username }).subscribe((data) => {
      this.getData();
    });
  }

  ////////////////////////////// Verification Company ////////////////////////////////////////////

  verifieCompanies(name) {
    this._http.httpVerifyCompanies({ name: name }).subscribe((data) => {
      this.getCompany();
    });
  }

  rejectCompanies(name) {
    this._http.httprejectCompanies({ name: name }).subscribe((data) => {
      this.getCompany();
    });
  }

  //////////////////////////////// Verification Center ////////////////////////////////////////
  verifieCenter(name) {
    this._http.httpVerifyCenter({ name: name }).subscribe((data) => {
      this.getCenters();
    });
  }

  rejectCenter(name) {
    this._http.httprejectCenter({ name: name }).subscribe((data) => {
      this.getCenters();
    });
  }

 // DISCONNECT 
  goback() {
    this.router.navigateByUrl("/admin/login");
  }
  // go to ban users interface 
  ban() {
    this.router.navigateByUrl("/admin/ban");
  }
    // go to verification users interface 
  verifications() {
    this.router.navigateByUrl("/admin");
  }
    // go to memberships of training centers interface 
  membership() {
    this.router.navigateByUrl("/admin/update");
  }
}
