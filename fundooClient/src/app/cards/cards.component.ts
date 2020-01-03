import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { EditnoteComponent } from '../editnote/editnote.component';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() notes:any; //recvies from parent mainComponent
  @Output() afterUpdateEvent= new EventEmitter();


  constructor(private dialog:MatDialog ) { }


  ngOnInit() {
    //console.log("notes in cards---->",this.notes);
    
  }
  afterUpdate($event){
     this.afterUpdateEvent.emit("");
  }

  

}
