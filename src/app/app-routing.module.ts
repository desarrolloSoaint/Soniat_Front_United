import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SoniatComponent } from './components/soniat/soniat.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SoniatPublicoComponent } from './components/soniat-publico/soniat-publico.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'soniat', component: SoniatComponent},
  {path: 'contact', component: ContactListComponent},
  {path: 'sonia', component: SoniatPublicoComponent},
 // {path: 'dashboard', component: DashboardComponent},
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }],
   
  },
  // {path:'dashboard/salir', component: SalirComponent },
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }