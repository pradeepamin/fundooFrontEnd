import { Component, OnInit, Input, Output } from '@angular/core';
import { NoteserviceService } from '../services/noteservice.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Output() afterUpdateevent = new EventEmitter()
  
  @Input() notesicon: any;

  isArchived = true
  
  constructor(private noteServices: NoteserviceService) { }

  ngOnInit() {
    // console.log(" notes in iconnnn-->", this.notesicon);

  }

  //this function is for archive notes
  archiveNote(card) {
    console.log("IDD--->", card._id);
    let cards = {
      "noteId": card._id
    }
    this.noteServices.archiveNote(cards).subscribe(res => {
      console.log("RES ----------->", res);
      this.afterUpdateevent.emit("true");
    })
  }

  DeleteNote(card){
    console.log("IDD---for delete>", card._id);
    let note1 = {
      "userId": card._id
    }
    this.noteServices.deleteNote(note1).subscribe(res => {
      console.log("RES---delete-------->", res);
      this.afterUpdateevent.emit("true");
    })
  }

  setColor(color,note){
console.log("Color---->",color,note);

  }

   

  arrayOfColors = [
    [
      { color: "rgb(247, 86, 118)", name: "pink" },
      { color: "darkgoldenrod", name: "darkGolden" },
      { color: "olive", name: "olive" }
    ],
    [
      { color: "slategray", name: "grey" },
      { color: "rgb(750, 85, 3)", name: "pink" },
      { color: "rgb(152, 70, 362)", name: "pink" }
    ],
    [
      { color: "rgba(35, 24, 192, 0.651)", name: "blue" },
      { color: "rgb(149, 133, 144)", name: "lightPurple" },
      { color: " rgb(134, 134, 92)", name: "darkYellow" }
    ]
  ]

}


