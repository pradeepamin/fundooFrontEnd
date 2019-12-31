
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { log } from 'util';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  baseUrl = environment.baseUrl
  noteUrl= environment.noteUrl

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.baseUrl + 'login', user)
  }

  register(newUsers) {
    console.log(newUsers, "here in frontend---");
    console.log("this url",this.baseUrl);
    console.log("user--->",newUsers);
    return this.http.post(this.baseUrl + 'register', newUsers)
  }

  forgotPassword(Email) {
    return this.http.post(this.baseUrl + 'forgotPassword', Email)
  }

  resetPassword(passwords,tok){
    return this.http.post(this.baseUrl + `resetPassword/${tok}`, passwords)
  }
  logoutUser(){
    return this.http.post(this.baseUrl + 'login',{} )
  }


  addNotes(data){
    
    return this.http.post(this.noteUrl +'addNote', data)
  }

  getAllNotes(){
    return this.http.get(this.noteUrl + 'getAllNote',{})
  }

}