import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mbastudents',
  templateUrl: './mbastudents.component.html',
  styleUrls: ['./mbastudents.component.css']
})
export class MbastudentsComponent implements OnInit {
  details: Object;
  constructor(private http: HttpClient, private studetails: RegisterService, private router: Router) { }

  getstudents(){
    var rqtn={
      "dept":"MBA"
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


