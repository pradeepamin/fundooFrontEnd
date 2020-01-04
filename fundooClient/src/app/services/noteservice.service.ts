import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  noteUrl= environment.noteUrl
  constructor(private httpNoteService: HttpClient) { }

  addNotes(data){
    console.log("data-->",data);
    
    
    return this.httpNoteService.post(this.noteUrl +'addNote', data)
  }

  getAllNotes(){

    return this.httpNoteService.get(this.noteUrl + 'getAllNote',{})
  }


  archiveNote(card){
    return this.httpNoteService.put(this.noteUrl+ 'archiveNote', card)
  }

  archiveGet(){
    return this.httpNoteService.get(this.noteUrl+ 'getArchiveNote',{})

  }

  
  deleteNote(card1){
    
    
    return this.httpNoteService.put(this.noteUrl+ 'deleteNote', card1)
  }
  

  deleteGet(){
    return this.httpNoteService.get(this.noteUrl+ 'getDeleteNote',{})

  }

  unArchive(unArch){
    console.log("carddd in servcie",unArch);
    return this.httpNoteService.put(this.noteUrl+ 'unarchiveNote', unArch)
  
  } 
  unDelete(unDel){
  
    return this.httpNoteService.put(this.noteUrl+ 'unDeleteNote', unDel)
   
  } 

  colNote(col){
    console.log("carddd in servcie",col);
    return this.httpNoteService.post(this.noteUrl+ 'noteColor', col)
   
  }
  

  updateNote(editNote){
    console.log("carddd in servcie",editNote);
    return this.httpNoteService.put(this.noteUrl+ 'updateNote', editNote)
   
  }

}
