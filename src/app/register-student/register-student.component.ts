import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//// TO DELETE //////////
  collect( username,email,secretinfo,password,reppassword){
    console.log('done')
  }
}
