import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { log } from 'util';
import { NoteserviceService } from '../services/noteservice.service';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  grid:boolean=true;;
  localstorage_image:any
  imageurl:string
  fname;
  lname;
  email;
  username;
  profilePicUser;
  url;
  constructor(private userService:UserServiceService,private router:Router,private noteService:NoteserviceService,private dataService:DataService) { }

  ngOnInit() {
    this.fname=localStorage.getItem('firstNameUser');
    this.email=localStorage.getItem('emailUser');
    this.profilePicUser=localStorage.getItem('profilePicUser');
    // this.uploadPic();
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

selectedFile:any;

onFileSelected(event){
  console.log("Evvent to upolad image--",event.target.files[0].name);
  this.selectedFile=event.target.files[0];
  this.uploadPic();
  localStorage.removeItem('profilePicUser');

}

uploadPic(){
   console.log("pic data-->", this.selectedFile);
  const uploadData= new FormData();

    uploadData.append('image', this.selectedFile);
    this.userService.uploadProfilePic(uploadData).subscribe((res:any) => {
      console.log("Getting all collab users--->", res);
      console.log("Gedffdfdftting all collab users--->", res.imageUrl);
      localStorage.setItem('profilePicUser',res.imageUrl)
      this.profilePicUser=localStorage.getItem('profilePicUser');

    })
  }
  gridView(){
  this.grid=!this.grid
  this.dataService.gridList(this.grid)

  }


}
