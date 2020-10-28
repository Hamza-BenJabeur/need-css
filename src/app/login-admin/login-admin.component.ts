import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login-admin",
  templateUrl: "./login-admin.component.html",
  styleUrls: ["./login-admin.component.css"],
})
export class LoginAdminComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void { }
  // to change 
  login(admin, password) {
    if (admin === "admin" && password === "admin") {
      this.router.navigateByUrl("/admin");
    } else {
      alert("wrong");
    }
  }
}
