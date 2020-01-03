import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { NoteserviceService } from '../services/noteservice.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  @Output() eventEmitter = new EventEmitter()

  constructor(private noteService:NoteserviceService) { }

  card=false;

  title=new FormControl('',[Validators.required,Validators.minLength(2)]);
  description=new FormControl('',[Validators.required,Validators.minLength(2)]);
  ngOnInit() {
   
  }

  createNote() {
    this.card=!this.card;
    if(this.title.value==null || this.description.value==null){
      console.log("no notes added");
      return
    }
    else{
    const data = {
      "title": this.title.value,
      "description": this.description.value
    }

      this.noteService.addNotes(data).subscribe(
        response => {

          console.log(response)
          this.eventEmitter.emit("");
          console.log("after emitting");
          this.title.reset();
          this.description.reset();
        })
  }
  }

}
