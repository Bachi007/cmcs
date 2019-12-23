import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AddpeopleService } from '../addpeople.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  [x: string]: any;

 
  constructor(private myRoute:Router,private http: HttpClient, private addpeople: AddpeopleService,) { }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  Username=this.user.name;
  logout(){
    localStorage.removeItem("isLoggedIn");
  this.myRoute.navigate(["login"]);
  }
  addstudent(){
    var student = {
      "sno":this.sno,
      "fullname": this.fullname,
      "dept":this.dept,
      "regnum":this.regnum,
      "email":this.email,
      "phone":this.phone,
      "year":this.year
    }
    console.log(student)
 
    this.addpeople.student(student).subscribe(res=>{
      console.log(typeof (res))
      console.log(res['status'])
      this.result = res['data']
      if (this.result != null) {
        swal("","Successfully added a student","success")
        this.myRoute.navigate(['addpeople'])
      }
    })
  }
  ngOnInit() {
  }

}
