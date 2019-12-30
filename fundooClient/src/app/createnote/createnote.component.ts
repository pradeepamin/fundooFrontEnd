import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  constructor() { }
  flag = false;
  title=new FormControl('',[Validators.required,Validators.minLength(2)]);
  description=new FormControl('',[Validators.required,Validators.minLength(2)]);
  ngOnInit() {
  }

  showNote() {

    this.flag = !this.flag;
  }

}
