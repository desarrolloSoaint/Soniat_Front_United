
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../models/jwt-model';
import { Gender } from '../models/gender';
import { Country } from '../models/country';
import { Currency } from '../models/currency';
import { Profession } from '../models/profession';
import { State } from '../models/state';
import { StateCivil } from '../models/state-civil';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'http://localhost:8081/api/v1/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(login: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authURL + 'login', login);
  }

  public gender(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>('http://localhost:8081/api/v1/gender/find-all');
  }

  public country(): Observable<Country[]> {
    return this.httpClient.get<Country[]>('http://localhost:8081/api/v1/country/find-all');
  }

  
  public currency(): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>('http://localhost:8081/api/v1/currency/find-all');
  }

  public stateCivil(): Observable<StateCivil[]> {
    return this.httpClient.get<StateCivil[]>('http://localhost:8081/api/v1/statecivil/find-all');
  }

  public state(): Observable<State[]> {
    return this.httpClient.get<State[]>('http://localhost:8081/api/v1/state/find-all');
  }

  public profession(): Observable<Profession[]> {
    return this.httpClient.get<Profession[]>('http://localhost:8081/api/v1/profession/find-all');
  }
 
}