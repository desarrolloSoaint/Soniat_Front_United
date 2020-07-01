import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ROUTES } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuItems;
  public ROUTES: any;
  RouteInfo: any;

  constructor() { }
  menuOptionService(ROUTES): Observable<any>{
   
    this.ROUTES = ROUTES;
    this.menuItems = this.ROUTES;
    
    // if( this.menuItems != null){
    //   alert('llamar');
    // }
   return this.menuItems;
 
  }

}




 // let identity = JSON.parse(localStorage.getItem('ROUTES'));


 //   let json = JSON.stringify(ROUTES);
  //   let params = 'json='+json;
  //   //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  //  return this.http.get(this.ROUTES);

















   /* let ROUTES = JSON.parse(localStorage.getItem('RouteInfo[]'));
    if(this.menuItems != this.RouteInfo ){
      this.menuItems = this.ROUTES;
     // this.icon=Img /assets/img/avatar4.png;
     //this.menuItems = ROUTES.filter(menuItem => MenuService);
     
    }else{
      this.menuItems = "hola" ;
      
    }
   
    return this.menuItems;*/
    
   //return this.getUsers("los campos estan vacios contactese con un tecnico en chatbot");
    //}



/* let json = JSON.stringify(data);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
   return this.http.post(this.url+'getmenu', params , { headers : headers });*/    
  //se tiene que probR Cableado