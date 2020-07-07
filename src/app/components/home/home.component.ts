import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import * as Chartist from 'chartist';
import { AuthService } from '../../services/auth.service';
import { Gender } from '../../models/gender';
import { Country } from 'app/models/country';
import { State } from 'app/models/state';
import { StateCivil } from 'app/models/state-civil';
import { Profession } from 'app/models/profession';
import { Currency } from 'app/models/currency';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: any = {};
  isLogin = false;
  roles: string[];
  gender: Gender[] = [];
  country: Country[] = [];
  state: State[] = [];
  stateCivil: StateCivil[] = [];
  profession: Profession[] = [];
  currency: Currency[] = [];
  authority: string;
  devolver:Boolean;
  constructor(private authService: AuthService,private tokenService: TokenService,private router: Router) { }

  ngOnInit() {
  

    this.authService.currency().subscribe(
      data => {
        this.currency = data;
      },
      err => {
        console.log(err);
      }
    );

    this.authService.country().subscribe(
      data => {
        this.country = data;
        console.log(this.country,'err');
      },
      err => {
        console.log(err);
      }
    );

    this.authService.profession().subscribe(
      data => {
        this.profession = data;
      },
      err => {
        console.log(err);
      }
    );

    this.authService.stateCivil().subscribe(
      data => {
        this.stateCivil = data;
      },
      err => {
        console.log(err);
      }
    );

    this.authService.state().subscribe(
      data => {
        this.state = data;
        console.log(this.state,'err');
      },
      err => {
        console.log(err);
      }
    );
    this.authService.gender().subscribe(
      data => {
        this.gender = data;
      },
      err => {
        console.log(err);
      }
    );
    this.info = {
      token: this.tokenService.getToken(),
      email: this.tokenService.getUserName(),
      authorities: this.tokenService.getAuthorities()
    };

    if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.roles = [];
      this.roles = this.tokenService.getAuthorities();
      this.roles.every(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }

    
    
  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['login']);
    
  }

}