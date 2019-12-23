import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-mcastudents',
  templateUrl: './mcastudents.component.html',
  styleUrls: ['./mcastudents.component.css']
})
export class McastudentsComponent implements OnInit {
  [x: string]: Object;

  constructor(private http: HttpClient, private studetails: RegisterService, private router: Router) { }

  getstudents(){
    var rqtn={
      "dept":"MCA"
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
