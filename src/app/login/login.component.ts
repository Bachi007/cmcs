import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  username: any;
  password: any;
  result: any;

  constructor(private http: HttpClient, private login: RegisterService, private router: Router) { }
  submit() {
    var user = {
      "name": this.username,
      "password": this.password
    }
    this.login.check(user).subscribe(res => {

      console.log(typeof (res))
      console.log(res['status'])
      this.result = res['data']
      if (this.result != null) {
        localStorage.setItem('isLoggedIn', JSON.stringify(res['data']));
        swal("","Successfully LoggedIn","success")
        this.router.navigateByUrl('/home')
      }
      else {
        this.errorMessage = res['Status']
      }
    });
  }

  ngOnInit() {
  }

}
