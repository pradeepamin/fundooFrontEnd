import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../services/noteservice.service';

@Component({
  selector: 'app-mainnote',
  templateUrl: './mainnote.component.html',
  styleUrls: ['./mainnote.component.scss']
})
export class MainnoteComponent implements OnInit {
  allNotes:any;

  constructor(private noteService:NoteserviceService) { }

  ngOnInit() {
    this.getNotes()
    this.getCollabNotes()
    // this.toDisplayLabelCollab()
  //  this.afterAdding(event)

  }
  getNotes(){
    this.noteService.getAllNotes().subscribe((res:any)=>{
       console.log("REs of getall notes",res.data);
      this.allNotes=res.data;
      
    })
  }
  getCollabNotes(){
    this.noteService.getAllCollabNotes().subscribe((res:any)=>{
       
       console.log("Getting all collab users--->", res.data)
     for(let i of res.data){

      console.log("dddddddd",i);
      this.allNotes.push(i.noteId)
     }
    })
  }
  // collarr: any;
  // toDisplayLabelCollab(){
  //   this.noteService.collabLabels().subscribe((res:any)=>{
       
  //      console.log("gettiing all  xxxcccc collab users--->", res.data)
  //      let res2 = res.data.colabUsersDetails;
  //      let UserDetailsArray = [];
 
  //      let collUsers: any;
  //      console.log("Datata sorting--->", res2);
  //      res2.forEach((ele => {
      
  //        collUsers = {
  //          fname: ele._id.firstName
        
  //        }
  //        UserDetailsArray.push(collUsers);
  //      }))
  //      console.log("collab user details->", collUsers);
  //      console.log("collab user details->", UserDetailsArray);
  //      this.collarr = UserDetailsArray;
     
  //      console.log("This array result datatt-----",this.collarr);
  //      this.allNotes.push(UserDetailsArray)
  //      console.log("ALl details",this.allNotes);
       
     
  //   })
  // }





  afterAdding($event){
    this.getNotes();
    console.log("after listening to event");
  }

}
