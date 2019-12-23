import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private myRoute:Router) { }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  Username=this.user.name;
  logout(){
    localStorage.removeItem("isLoggedIn");
  this.myRoute.navigate(["login"]);
  }
  ngOnInit() {
  }

}
