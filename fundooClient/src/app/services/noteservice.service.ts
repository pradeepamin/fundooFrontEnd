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
  // getAllCollabNotes(){

  //   return this.httpNoteService.get(this.noteUrl + 'getCollaboratorNote',{})
  // }

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
    console.log("Delete in service-->",unDel);
    
  
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


  getCollab(noteId){
    console.log("note id get all coll service---->>",noteId);
    return this.httpNoteService.post(this.noteUrl+ 'getCollaborator', noteId)

  }
 
    
  DeleteCollaborator(deleteCollab){
    console.log("data-form service to delete collab->",deleteCollab);
    return this.httpNoteService.put(this.noteUrl+ 'deleteCollaborator', deleteCollab)
  }



  addCollaborator(addColl){
    console.log("add collab id in service---->>",addColl);
    return this.httpNoteService.post(this.noteUrl+ 'addCollaborator', addColl)
  }

  // collabLabels(){
  //   return this.httpNoteService.get(this.noteUrl+ 'getAllCollaborator', {})

  // }

  dateTimeReminder(dateTime){
    console.log("Date time in service---",dateTime);
    
    return this.httpNoteService.post(this.noteUrl+ 'addReminder', dateTime)  
  }

  uploadNotePic(NotePIC){
    console.log("notepic in servcie",NotePIC);
    
  return this.httpNoteService.post(this.noteUrl+ 'noteImage', NotePIC)  
  }
  deleteNotePic(ID){
    console.log("deletePIC in servcie",ID);
    return this.httpNoteService.put(this.noteUrl+ 'deleteNoteImage', ID)  
  
} 
} 
