import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UserServiceService } from '../services/user-service.service';
import { NoteserviceService } from '../services/noteservice.service';
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
onenote:any;
  fname:any;
  email:any;
  profilePicUser:any;
  getCollab: any;
 
 
  constructor(private noteService: NoteserviceService , @Inject(MAT_DIALOG_DATA) public data: any) {   
    this.onenote=this.data;
    console.log("note id:",this.onenote);
  }

  
  ngOnInit() {
    this.fname=localStorage.getItem('firstNameUser');
    this.email=localStorage.getItem('emailUser');
    this.profilePicUser=localStorage.getItem('profilePicUser');
    this.getAllColl();

  }


    // let colId={
    //   "noteId":this.onenote
    // }
    // console.log("NOttte in array-->",colId);
    
    
  //   this.noteService.getCollab(a).subscribe((res:any)=>{
  //      console.log("Getting all users--->",res.data);
  //      this.getCollab=res.data;
      
  //   })
  // }

  getAllColl(){
    console.log("note ffffffffffff:",this.onenote.noteId);
    let a={
      "noteId":this.onenote.noteId
    }
    this.noteService.getCollab(a).subscribe(res => {
      console.log("Getting all users--->", res);
    
    
    })
  }

  





}
