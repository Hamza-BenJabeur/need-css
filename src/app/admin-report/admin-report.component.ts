import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css'],
})
export class AdminReportComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  
  reports : any

  ngOnInit(): void {
    this._http.getUsersReport().subscribe((data)=>{
      this.reports = data
      console.log(this.reports)
    })
  
  }

  deleteReport(id){
    this._http.deleteReports({id}).subscribe((data)=>{
    })
    this.ngOnInit()
  }

  deleteAll(){
    this._http.deleteAllReports().subscribe((data)=>{})
    this.ngOnInit()
  }


}
