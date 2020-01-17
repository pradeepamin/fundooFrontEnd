import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private Data = new Subject<string>();
  editedData = this.Data.asObservable();


  private gridView=new BehaviorSubject(true);
  List=this.gridView.asObservable();
  
  constructor() { }

gridList(list:boolean){
  this.gridView.next(list)
}






  CollabUSersTOCard(data){
    console.log("Data in data service--",data);
    this.Data.next(data)
  }

  

 
}


 
  