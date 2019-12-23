import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmanagement',
  templateUrl: './adminmanagement.component.html',
  styleUrls: ['./adminmanagement.component.css']
})
export class AdminmanagementComponent implements OnInit {

 
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
