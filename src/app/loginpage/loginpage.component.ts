import { Component, OnInit } from '@angular/core';
import { Loginmodel } from '../model/loginmodel';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }

login :Loginmodel = {
  email:'',
  password:''
}

error = {
  email:"",
  password:""
}

  ngOnInit() {
  }

  submit(login) {
    console.log('login',login);
    if(login.email == null || login.email == undefined || login.email == '')  {
     this.error.email = "email canot be blank";
    }

    if(login.password == null || login.password == undefined || login.password == '') {
      this.error.password = "password canot be blank"
    }
    else {
      this.error.email = '',
      this.error.password = '';
    }
  }

}
