import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email = new FormControl();
  
  constructor(private userService: UserServiceService,private router:Router,private matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  forgotPassword(){
    try{
    let Email = {
      "email": this.email.value
     
    }
    this.userService.forgotPassword(Email).subscribe(res=>{
      console.log("data-->",res);
      // console.log("forgot token",res["data"][0]);
      let urlWithToken=res["data"][0]
      console.log("URLL token-->",urlWithToken);

      localStorage.setItem('resetPasswortdToken',urlWithToken)
      this.router.navigate(['/login'])
      this.matSnackBar.open("Veriffication sent to email please Login email","OK")
  
    },error=>{
      this.matSnackBar.open("Error in Resetting Password","Ok",{duration:5000})
    })

  }catch(e){
    this.matSnackBar.open(e,"Ok",{duration:5000})
  }
  }

}
