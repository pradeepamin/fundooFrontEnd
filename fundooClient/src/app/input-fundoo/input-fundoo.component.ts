import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-fundoo',
  templateUrl: './input-fundoo.component.html',
  styleUrls: ['./input-fundoo.component.scss']
})
export class InputFundooComponent implements OnInit {
  newPost: string;
  enteredPost: string;
  enteredValue:string='';
  constructor() { }

  ngOnInit() {
  }
  onAddPost() {
    this.newPost = "hii hello";
    this.enteredPost=this.enteredValue;
    
  }

   posts=[
    {title:"first",content:"This first"},
    {title:"sec",content:"This sec"},
    {title:"third",content:"This third"}
  ]
}
