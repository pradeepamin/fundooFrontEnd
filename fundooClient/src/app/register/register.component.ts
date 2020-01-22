import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { log } from 'util';
import {UserReg} from '../model/user-reg'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  firstName=new FormControl();
  lastName=new FormControl();
  email=new FormControl();
  password=new FormControl();
  confirmPassword=new FormControl();


  constructor(private userService:UserServiceService,private router:Router,private matSnackBar: MatSnackBar) { }
  
  ngOnInit() {
  }
  //this object is called model (userReg class)
  model=new UserReg()

  
  register(){
    try{
    // let newUsers={
    //   "firstName":this.firstName.value,
    //   "lastName":this.lastName.value,
    //   "email":this.email.value,      
    //   "password":this.password.value,
    //   "confirmPassword":this.confirmPassword.value
    // }
console.log("All regis user-->",this.model);

    this.userService.register(this.model).subscribe(newUser=>{
    console.log("in Register.ts---->",newUser);

    this.router.navigate(['/login']);
   
    this.matSnackBar.open ('Registered successfully','Ok');

    },error=>{
      this.matSnackBar.open("Error In Registration","Ok",{duration:5000})

    })
  }catch(e){
      this.matSnackBar.open(e,"ok",{duration:5000})
    };
    
  }
  

}
