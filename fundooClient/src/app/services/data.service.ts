import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private Data = new Subject<string>();
  editedData = this.Data.asObservable();

  
  constructor() { }
  CollabUSersTOCard(data){
    console.log("Data in data service--",data);
    this.Data.next(data)
  }

 
}


 
  