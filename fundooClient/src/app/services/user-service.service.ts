
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

  uploadProfilePic(file,image){
    console.log("File and imagee-->",file,image);

    let formdata: FormData = new FormData();
    formdata.append('image',image);

    const formData = new FormData();

  console.log("Form dattta--->",formData);
  

    return this.http.post(this.baseUrl + 'imageUpload', formData)
  }
  
  

}