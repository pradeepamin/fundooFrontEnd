import { Component, OnInit, Inject,Output ,EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { identifierModuleUrl } from '@angular/compiler';
import { NoteserviceService } from '../services/noteservice.service';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss']
})
export class EditnoteComponent implements OnInit {
  onenote:any;
  @Output() afterUpdateevent = new EventEmitter()

  title:any="";
  description:any="";
 
  constructor(private dialog:MatDialog, @Inject(MAT_DIALOG_DATA) private data,private noteservice:NoteserviceService) { 
    this.onenote=this.data.note;
   
  }

  ngOnInit() {
  }
  save(_id,title,description){
    console.log("titt,,dess-->",_id,title,description);
   const editData={
     "_id":_id,
     "title":title,
    "description":description
   }
   console.log(editData,"after editing");
   this.noteservice.updateNote(editData).subscribe(res=>{
       console.log("RES edit update--->",res);
       this.afterUpdateevent.emit("");
       this.closeDialog();
      
  })
  }

  closeDialog(){
    this.dialog.closeAll();
  }


}


