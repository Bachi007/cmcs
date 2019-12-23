import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcomstudents',
  templateUrl: './mcomstudents.component.html',
  styleUrls: ['./mcomstudents.component.css']
})
export class McomstudentsComponent implements OnInit {
  [x: string]: Object;

  constructor(private http: HttpClient, private studetails: RegisterService, private router: Router) { }

  getstudents(){
    var rqtn={
      "dept":"MCOMANF"
    }
  
    this.studetails.students(rqtn).subscribe(res=>{
     // this.qtn=res;
      console.log(res);
      this.details=res
        })
   }
    ngOnInit() {
     this.getstudents()
    }
}
