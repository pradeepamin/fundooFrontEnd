import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
  
})
export class ResetPasswordComponent implements OnInit {
  
  password=new FormControl();
  confrimPassword=new FormControl();

  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit() {
  }

 resetPassword(){
  var url= window.location.href;
  console.log("urlll-->",url);
  var token=url.split("/");
  let tok=token[4]
  // console.log("To check token",tok);
   let newData={
     "password":this.password.value,
     "confirmPassword":this.confrimPassword.value
   }

if(this.password.value==this.confrimPassword.value){
   this.userService.resetPassword(newData,tok).subscribe(newData=>{
     console.log("userdata-->",newData);
     this.router.navigate(['/login']);
   })
  }
  else{
    console.log("Password not matching");
    
  }
 }

}
