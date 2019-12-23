import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addpeople',
  templateUrl: './addpeople.component.html',
  styleUrls: ['./addpeople.component.css']
})
export class AddpeopleComponent implements OnInit {
  [x: string]: any;
  closeResult: string;
  qtn: Object;
  question:any=[];
 
  query: any;
  addqtn: Object;
  modalRef: any;
  constructor(private modalService: NgbModal,private myRoute:Router) { }
  addstudent(content,query){
    console.log(query)
    this.query=query
   
    this.modalRef=this.modalService.open(content, {backdrop:false,centered:true,size:'lg'})
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
