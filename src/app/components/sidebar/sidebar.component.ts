import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MenuService }from '../../services/menu.service';
import { post } from 'jquery';
import { Console } from 'console';
import { AnyARecord } from 'dns';
import { USERS } from 'app/models/avatar';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
declare interface User {
  name: string;
  foto: string;
  
}
export const ROUTES: RouteInfo[] = [
{ path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: 'color:white', },
    { path: '/user-profile', title: 'Administrador de Usuarios',  icon:'person', class: '' },
   //{ path: '/user-profile/opcionuser', title: 'configuracion', icon:'person', class:''},
    { path: '/table-list', title: 'Configuracion de Chatbot',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Estadisticas',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 public  menuItems: any;
 public name: any;
public identity: any;
public rol: any;
public imagen: any;
public   show: boolean;
public USERS: any;
  icon: any;
  ROUTES: any;
  foto: any;
  

  constructor( private userService : UserService, private MenuService: MenuService) {
    this.identity=this.userService.dataUserSesion(USERS), 
    this.rol=this.userService.datauserrol(),
    this.ROUTES=this.MenuService.menuOptionService(ROUTES);  
    
   }

  ngOnInit(): void {
    

    this.identity=USERS.filter(identity => this.userService.dataUserSesion(USERS));

    this.rol=this.userService.datauserrol();
    this.menuItems = ROUTES.filter(menuItems =>this.MenuService.menuOptionService(ROUTES));
       


     
   console.log('nombres',ROUTES);
  
  
    console.log('menu', this.ROUTES);
    console.log('uno',this.MenuService);  
 
  }
  

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
