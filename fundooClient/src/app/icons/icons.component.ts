import { Component, OnInit, Input, Output } from '@angular/core';
import { NoteserviceService } from '../services/noteservice.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter()
  colors: any;
  @Input() notesicon: any;

  isArchived = true
  constructor(private noteServices: NoteserviceService) { }

  ngOnInit() {
    console.log(" notes in iconnnn-->", this.notesicon);



  }
  archiveNote(card) {
    console.log("IDD--->", card._id);
    let cards = {
      "noteId": card._id
    }

    this.noteServices.archiveNote(cards).subscribe(res => {
      console.log("RES----------->", res);
      this.eventEmitter.emit("");
    })

  }









  arrayOfColors = [
    [
      { color: "rgb(247, 86, 118)", name: "pink" },
      { color: "darkgoldenrod", name: "darkGolden" },
      { color: "darkgreen", name: "darkGreen" },
      { color: "olive", name: "olive" }
    ],
    [
      { color: "slategray", name: "grey" },
      { color: "rgb(10, 51, 60)", name: "green" },
      { color: "rgb(99, 29, 43)", name: "brown" },
      { color: "rgb(131, 70, 82)", name: "pink" }
    ],
    [
      { color: "rgba(35, 24, 192, 0.651)", name: "blue" },
      { color: "rgb(149, 133, 194)", name: "lightPurple" },
      { color: "rgb(88, 194, 120)", name: "lightPurple" },
      { color: " rgb(134, 134, 92)", name: "darkYellow" }
    ]
  ]

}


