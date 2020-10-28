import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  application: any;
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var obj = { owner: this.local.companyInfo.owner };
    console.log(obj);
    this._http.httpGetApplications(obj).subscribe((data) => {
      this.application = data;
      console.log(data);
    });
  }
  accept(id){
    var obj={id}
  this._http.httpacceptApp(obj).subscribe(data=>{
    console.log(data);
    this.ngOnInit();
  })
  }
  reject(id) {
    var obj = { id };
    this._http.httpdeleteApplication(obj).subscribe((data) => {
      
      this.ngOnInit();
    });
  }
}
