import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AddpeopleService } from '../addpeople.service';
import swal from 'sweetalert'
@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {
  [x: string]: any;


  constructor(private myRoute:Router,private http: HttpClient, private addpeople: AddpeopleService,) { }
  addstudent(){
    var student = {
      "fullname": this.fullname,
      "dept":this.dept,
      "regnum":this.regnum,
      "email":this.regnum,
      "phone":this.phone
    }
    console.log(student)
 
    this.addpeople.faculty(student).subscribe(res=>{
      console.log(typeof (res))
      console.log(res['status'])
      this.result = res['data']
      if (this.result != null) {
        swal("","Successfully added a student","success")
        this.myRoute.navigate(['addpeople'])
      }
    })
  }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  Username=this.user.name;
  logout(){
    localStorage.removeItem("isLoggedIn");
  this.myRoute.navigate(["login"]);
  }
  ngOnInit() {
  }

}
