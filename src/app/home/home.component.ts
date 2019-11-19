import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  modalRef: any;
  constructor(private modalService: NgbModal,private router:Router) { }
  order(content,query){
    this.query=query
   
    this.modalRef=this.modalService.open(content, {backdrop:false,centered:true,size:'lg'})
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  ngOnInit() {
  }

}
