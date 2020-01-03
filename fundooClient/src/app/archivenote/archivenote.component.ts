import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { NoteserviceService } from '../services/noteservice.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
  allArchiveNotes:any;
  @Output() afterUpdateEvent = new EventEmitter()

  constructor(private noteService:NoteserviceService) { }

  ngOnInit() {
    this.getAllArchiveNotes()
   
  }
  getAllArchiveNotes(){
    this.noteService.archiveGet().subscribe((res:any)=>{
      console.log("REs of getall notes",res.data);
      this.allArchiveNotes=res.data;
      
    })
  }
  
  
  unArchiveNote(notes){
    console.log("Note id----->",notes._id);
    let unArch = {
      "noteId": notes._id
    }
    this.noteService.unArchive(unArch).subscribe(res => {
      console.log("RES---unArchive-------->", res);
      //  this.afterUpdateEvent.emit("true");
      this.getAllArchiveNotes()
    })
  }
 
  
}
