import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from 'app/models/user.model';
import { Session } from 'protractor';
import {USERS } from '../models/avatar'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
public rol;
  public identity;
  public icon;
  public imagen;
  httpClient: any;
  public USERS: any;

  constructor() {}



dataUserSesion(USERS): Observable<any>{

    let identity = JSON.parse(localStorage.getItem('USERS'));
    if(this.USERS = USERS ){
      this.identity = this.USERS;
     
     
    }
    
    // else{
  
    //   alert ("llamar a un tecnio");
    // }
    return this.identity;
 
  }

datauserrol():Observable<any>{
  if(this.rol = " administrador" ){
    this.rol = this.rol;
   // this.icon=Img /assets/img/avatar4.png;
   
  }else{
    this.rol = null;
  }
  return this.rol;
}



}

  /*login(user: string): Observable<any> {
    return this.http.post("merci", user);
}-->*/

//   dataUserSesion(): Observable<any> {
//   let identity = JSON.parse(localStorage.getItem('User'));
//   if(this.identity != this.USERS ){
//     this.identity = this.identity;
//     this.imagen = this.getImage();
   
//   }else{
//     this.identity = null;
//   }
//   return this.identity;
//  //return this.getUsers();
//   }

// getImage(): Observable<any> {
// let foto = JSON.stringify(localStorage.getItem);
// return this.imagen;
//    // let foto = JSON.parse(localStorage.getItem('foto'));
//   // if(this.imagen == foto ){
//   //   this.imagen = foto;
//   // //  // this.icon=Img /assets/img/avatar4.png;
   
//   //  }else{
//   //   this.imagen = null;
//   // }
//   // return this.imagen;

// }