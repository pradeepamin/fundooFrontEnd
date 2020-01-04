import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../services/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  alldeletedNotes:any;

  constructor(private noteService:NoteserviceService) { }

  ngOnInit() {
    this.getAllDeleteNotes()
  }
  getAllDeleteNotes(){
    this.noteService.deleteGet().subscribe((res:any)=>{
      console.log("REs of delete notes----",res.data);
      this.alldeletedNotes=res.data;
    })
  }
  unDeleteNote(note){
    console.log("deleted id---->",note._id);
    let unDel = {
      "noteId": note._id
    }
    this.noteService.unDelete(unDel).subscribe(res => {
      console.log("RES---unDelete-------->", res);
   
      this.getAllDeleteNotes()
    })
    
  }





}

