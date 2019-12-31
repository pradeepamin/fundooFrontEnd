import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  constructor(private userService:UserServiceService) { }
  // flag = false;
  card=false;
  title=new FormControl('',[Validators.required,Validators.minLength(2)]);
  description=new FormControl('',[Validators.required,Validators.minLength(2)]);
  ngOnInit() {
   
  }

  createNote() {
    this.card=!this.card;
    const data = {
      "title": this.title.value,
      "description": this.description.value
    }
   
      this.userService.addNotes(data).subscribe(
        response => {

          console.log(response)
          // this.card = !this.card;
      
        })

  }
  

}
