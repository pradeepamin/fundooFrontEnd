import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { log } from 'util';
import { NoteserviceService } from '../services/noteservice.service';
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
  constructor(private userService:UserServiceService,private router:Router,private noteService:NoteserviceService) { }

  ngOnInit() {
    this.fname=localStorage.getItem('firstNameUser');
    this.email=localStorage.getItem('emailUser');
    this.profilePicUser=localStorage.getItem('profilePicUser');
  }
  logout()
{
  this.userService.logoutUser();
  localStorage.clear();
  console.log('User logout')
  this.router.navigate(['/login']);
}
getArchiveNote(){
  this.router.navigate(['/dashboard/archivenote']);
}

notes(){
  this.router.navigate(['/dashboard/mainnote']);
}
trash(){
  this.router.navigate(['/dashboard/trash']);
}
}
