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
       console.log("REs of geetting all collab notes notes",res.data);
     for(let i of res.data){
       
      console.log("dddddddd",i.noteId);
      this.allNotes.push(i.noteId)
      
     }
      
    })
  }

  afterAdding($event){
    this.getNotes();
    console.log("after listening to event");
  }
}
