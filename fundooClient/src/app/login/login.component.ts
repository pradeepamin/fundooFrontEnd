import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl();
  password = new FormControl();

  constructor(private userService: UserServiceService,private router:Router) { }
  ngOnInit() { }
  login() {
    let newUsers = {
      "email": this.email.value,
      "password": this.password.value
    }
    this.userService.login(newUsers).subscribe(res=>{
      console.log("data-->",res);
      //  console.log(res["data"][1].imageUrl)
      localStorage.setItem('token',res["data"][0].token)
      localStorage.setItem('profilePic',res["data"][1].imageUrl)

      this.router.navigate(['/dashboard']);
    })
  }


}
