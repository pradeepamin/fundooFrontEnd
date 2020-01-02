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
    
    return this.httpNoteService.post(this.noteUrl +'addNote', data)
  }

  getAllNotes(){

    return this.httpNoteService.get(this.noteUrl + 'getAllNote',{})
  }

  updateNote(data){
    return this.httpNoteService.put(this.noteUrl+ 'updateNote',data)
  }

  archiveNote(card){
    return this.httpNoteService.put(this.noteUrl+ 'archiveNote', card)
  }
}
