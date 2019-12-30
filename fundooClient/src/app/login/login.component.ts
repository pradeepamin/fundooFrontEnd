import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl();
  password = new FormControl();

  constructor(private userService: UserServiceService,private router:Router,private matSnackBar: MatSnackBar) { }
  ngOnInit() { }
  login() {
    let newUsers = {
      "email": this.email.value,
      "password": this.password.value
    }

this.userService.login(newUsers).subscribe(res=>{

  console.log("data-->",res);
console.log("eemail-->",res["data"][1].email)
console.log("name==>",res["data"][1].firstName);
  this.matSnackBar.open('User login successfully......','ok',{
    duration:1000
  })
  localStorage.setItem('token',res["data"][0].token)
  localStorage.setItem('profilePicUser',res["data"][1].imageUrl)
  localStorage.setItem('firstNameUser',res["data"][1].firstName)
  localStorage.setItem('emailUser',res["data"][1].email)
  this.router.navigate(['/dashboard']);
   

}, error => {
  console.log(error);
  this.matSnackBar.open('Please enter correct password & email','ok',{
    duration:3000
  })
})
} 

gotoForget(){
  this.router.navigate(['/forgotPassword']);  // define your component where you want to go
  
};

}



