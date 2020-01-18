import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UserServiceService } from '../services/user-service.service';
import { NoteserviceService } from '../services/noteservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  onenote: any;
  fname: any;
  email: any;
  profilePicUser: any;

  collarr: any;  
  
  
  
  email1 = new FormControl();
  message:string;
  ToData: any[];
  constructor(private noteService: NoteserviceService, @Inject(MAT_DIALOG_DATA) public data: any,private dataService:DataService) {
    this.onenote = this.data;  //gets id from icon component
   
  }

  ngOnInit() {
    this.fname = localStorage.getItem('firstNameUser');
    this.email = localStorage.getItem('emailUser');
    this.profilePicUser = localStorage.getItem('profilePicUser');
    this.getAllColl();
   
  
  }

 
  getAllColl() {
    console.log("clicked noteId of collac-->:", this.onenote.noteId);
    
    let noteId = {
      "noteId": this.onenote.noteId
    }
    //To get collobator details based on noteID
    this.noteService.getCollab(noteId).subscribe((res: any) => {
      console.log("Getting all response from colla users--->", res);
      console.log("Getting all collab users--->", res.data.collaboratorUsers);
      let res2 = res.data.collaboratorUsers;
      let UserDetailsArray = [];

      let collabUserDetails: any;
      console.log("Datata sorting--->", res2);
      res2.forEach((ele => {
        console.log("elelele", ele._id.firstName, ele._id.lastName);
        collabUserDetails = {
          fname: ele._id.firstName,
          lname: ele._id.lastName,
          email: ele._id.email
        }
        UserDetailsArray.push(collabUserDetails);
      }))
      console.log("collab user details->", collabUserDetails);
      console.log("collab user details->", UserDetailsArray);
      this.collarr = UserDetailsArray;
      this.ToData=UserDetailsArray;
      for (var key of UserDetailsArray) {
        console.log(key.email);
      }
      console.log("This array result datatt-----",this.ToData);
      
      this.dataService.CollabUSersTOCard(this.ToData)
    })
    
  }
  
  
  removeColab(item) {

    let deleteCollab = {
      "noteId": this.onenote.noteId,
      "collaboratorId": item.email
    }
    console.log("Delete data-->", deleteCollab);
    this.noteService.DeleteCollaborator(deleteCollab).subscribe((res: any) => {
      console.log("Getting all collab users--->", res);
      let i = this.collarr.indexOf(item)
      this.collarr.splice(i, 1)
    })
  }


  writeEmail() {
    let addColl = {
      "noteId": this.onenote.noteId,
      "collaboratorId": this.email1.value
    }
    console.log("Add coll-->", addColl);
    this.noteService.addCollaborator(addColl).subscribe((res: any) => {
      console.log("Getting all collab users--->", res);

    })
  }




}
