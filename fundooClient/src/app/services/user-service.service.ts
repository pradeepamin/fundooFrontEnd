
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  UserUrl: String = "http://localhost:4000/user/"

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.UserUrl + 'login', user)
  }

  register(newUsers) {
    console.log(newUsers, "here in frontend---");
    console.log("this url",this.UserUrl);
    console.log("user--->",newUsers);
    return this.http.post(this.UserUrl + 'register', newUsers)
  }

  forgotPassword(Email) {
    return this.http.post(this.UserUrl + 'forgotPassword', Email)
  }

  resetPassword(passwords,tok){
    return this.http.post(this.UserUrl + `resetPassword/${tok}`, passwords)
  }


}