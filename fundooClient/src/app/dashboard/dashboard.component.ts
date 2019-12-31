import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { log } from 'util';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  localstorage_image:any
  imageurl:string
  fname;
  lname;
  email;
  username;
  profilePicUser;
  url;
  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit() {
    this.fname=localStorage.getItem('firstNameUser');
    this.email=localStorage.getItem('emailUser');
    this.profilePicUser=localStorage.getItem('profilePicUser');
    
    this.getNotes()

  }
  logout()
{
  this.userService.logoutUser();
  localStorage.clear();
  console.log('User logout')
  this.router.navigate(['/login']);
}
getNotes(){
  this.userService.getAllNotes().subscribe((res:any)=>{
    console.log("REs of getall notes",res.data);
    
  })
}

}
