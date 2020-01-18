import { Component, OnInit, Input, Output } from '@angular/core';
import { NoteserviceService } from '../services/noteservice.service';
import { EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Output() afterUpdateevent = new EventEmitter()

  @Input() notesicon: any;  //gets data from parent cards

  isArchived = true
  public selectedTime = '18:33';
  today: string;
  isoo: any;
  selectNoteImage: any;

  constructor(private noteServices: NoteserviceService, private dialog: MatDialog, private atp: AmazingTimePickerService) { }

  ngOnInit() {
    console.log(" notes in iconnnn-->", this.notesicon);


  }

  noteImageChange(file){
    this.selectNoteImage=file.target.files[0];
    const uploadData= new FormData();
    uploadData.append('image', this.selectNoteImage);
    uploadData.append('noteId', this.notesicon._id);
    this.noteServices.uploadNotePic(uploadData).subscribe((res:any) => {
      console.log("Getting response after--->", res);
      this.afterUpdateevent.emit("true");
    
    })
  
    
  }


//This function is to set time , reminder
  open(noteID) {
    console.log("NoteID to set alram-----",noteID);
    const amazingTimePicker = this.atp.open({
      time: this.selectedTime,
      theme: 'dark',
      arrowStyle: {
        background: 'red',
        color: 'white'
      }
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedTime = time;
      var str = this.selectedTime;
      let time1 = str.replace(":", ",")
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      this.today = yyyy + ',' + mm + ',' + dd;
      // console.log("This date---", this.today);
      let con = this.today.concat(',', time1, ',', '0')
      // console.log("Time--", con);

      let timee = con.split(",")
      let op = new Date(parseInt(timee[0]), parseInt(timee[1]), parseInt(timee[2]), parseInt(timee[3]), parseInt(timee[4]), parseInt(timee[5]))
      let iso = op.toISOString(); 
      console.log("ISOOO Date--",iso);
   
      let dateTime={
        "noteId":noteID,
        "reminder":iso
      }
      console.log("Date time to set reminder--->",dateTime);

      this.noteServices.dateTimeReminder(dateTime).subscribe(res => {
        console.log("Response after setting for date time ----------->", res);
      })  
    });
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

   //this function is for DeleteNote notes
  DeleteNote(card) {
    console.log("IDD---for delete>", card._id);
    let note1 = {
      "userId": card._id
    }
    this.noteServices.deleteNote(note1).subscribe(res => {
      console.log("RES---delete-------->", res);
      this.afterUpdateevent.emit("true");
    })
  }

 //this function is for setColor 
  setColor(color, note) {
    console.log("Color---->", color, note);
    let col = {
      "noteId": color,
      "noteColor": note
    }
    this.noteServices.colNote(col).subscribe(res => {

      console.log("Resssponse backk---->");

      console.log("Response after setting note color-------->", res);
      this.afterUpdateevent.emit("true");
    })
  }
  //this function to get collobartor 
  dialogCol(): void {
    console.log("Note id in colab111111--->", this.notesicon._id);


    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '490px',
      height: '290px',
      data: { noteId: this.notesicon._id }
    });

  }

  selectChanged(time) {
    console.log("Time =---", time.target.value);

  }

//Color arrays
  arrayOfColors = [
    [
      { color: "rgb(247, 86, 118)", name: "pink" },
      { color: "rgb(141, 199, 214)", name: "darkGolden" },
      { color: "white", name: "white" }
    ],
    [
      { color: "slategray", name: "grey" },
      { color: "rgb(209, 163, 151)", name: "pink" },
      { color: "rgb(200, 232, 104)", name: "yellow" }
    ],
    [
      { color: "rgba(204, 141, 214)", name: "blue" },
      { color: "rgb(97, 191, 82)", name: "lightPurple" },
      { color: " rgb(158, 136, 191)", name: "darkYellow" }
    ]
  ]

}

