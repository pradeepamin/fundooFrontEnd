import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { identifierModuleUrl } from '@angular/compiler';
import { NoteserviceService } from '../services/noteservice.service';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss']
})
export class EditnoteComponent implements OnInit {
  onenote:any;
  title:string;
  description:string;
  constructor(@Inject(MAT_DIALOG_DATA) private data,private noteservice:NoteserviceService) { 
    this.onenote=this.data.note;
 
    
    
  }

  ngOnInit() {
  }
  save(_id,title,description){
  const newData={
    "_id":_id,
    "title":title,
    "description":description
  }
  this.noteservice.updateNote(newData).subscribe(res=>{
    console.log("RES update--->",res);
    
  })
  
}

}
