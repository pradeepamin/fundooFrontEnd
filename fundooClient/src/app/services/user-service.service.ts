
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { log } from 'util';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl = environment.baseUrl


  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.baseUrl + 'login', user)
  }

  register(newUsers) {
    console.log(newUsers, "here in frontend---");
    console.log("this url", this.baseUrl);
    console.log("user--->", newUsers);
    return this.http.post(this.baseUrl + 'register', newUsers)
  }

  forgotPassword(Email) {
    return this.http.post(this.baseUrl + 'forgotPassword', Email)
  }

  resetPassword(passwords, tok) {
    return this.http.post(this.baseUrl + `resetPassword/${tok}`, passwords)
  }
  logoutUser() {
    return this.http.post(this.baseUrl + 'login', {})
  }

  uploadProfilePic(uploadData) {

const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}

    for (var pair of uploadData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
    console.log("Form data-->", uploadData, +"urkl   " + 'http://localhost:4000/user/imageUpload');
    console.log('http://localhost:4000/user/imageUpload');
    

    return this.http.post('http://localhost:4000/user/imageUpload', uploadData)

  }



} 