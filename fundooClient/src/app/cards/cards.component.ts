import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { EditnoteComponent } from '../editnote/editnote.component';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() notes:any; //recvies from parent mainComponent
  @Output() afterUpdateEvent= new EventEmitter();
  // @Output() colorEvent= new EventEmitter();
  toGrid;

  constructor(private dialog: MatDialog,private dataService:DataService) {}


  ngOnInit() {
    console.log("ALl notess in cardddddd----",this.notes);

    this.dataService.List.subscribe(res=>{
      console.log("RESS of grid-->",res);
      
      this.toGrid=res;
    })
 
    
 this.dataService.editedData.subscribe((data:any)=>{
   console.log("data ftom collaabbb----<>>>",data);
   
 })
    
    
  }
  afterUpdate($event){
     this.afterUpdateEvent.emit("");
  }
  //thi function is for edit and update
  openDialog(note) {
    console.log("Nottes to eddiit-->",note);
    const dialogRef=this.dialog.open(EditnoteComponent,{
      data:{note}
    })
  }



}
