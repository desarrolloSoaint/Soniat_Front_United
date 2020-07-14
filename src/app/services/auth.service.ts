
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../models/jwt-model';
import { Gender } from '../models/gender';
import { Country } from '../models/country';
import { Currency } from '../models/currency';
import { Profession } from '../models/profession';
import { State } from '../models/state';
import { StateCivil } from '../models/state-civil';
import { Url_Back } from 'app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private httpClient: HttpClient) { }

  public login(login: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(Url_Back + 'auth/login', login);
  }

  public gender(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>(Url_Back + 'gender/find-all');
  }

  public country(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(Url_Back + 'country/find-all');
  }

  
  public currency(): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(Url_Back + 'currency/find-all');
  }

  public stateCivil(): Observable<StateCivil[]> {
    return this.httpClient.get<StateCivil[]>(Url_Back + 'statecivil/find-all');
  }

  public state(): Observable<State[]> {
    return this.httpClient.get<State[]>(Url_Back + 'state/find-all');
  }

  public profession(): Observable<Profession[]> {
    return this.httpClient.get<Profession[]>(Url_Back + 'profession/find-all');
  }

  guardar(clientes) : Observable<any> {
 
    let json = JSON.stringify(clientes);
    let params = 'json='+json;   
    console.log(clientes,"aqui");
    
    let headers = new HttpHeaders().set('Content-Type','application/json');
    console.log(params);
   return this.httpClient.post(Url_Back+'clients/create' , params, { headers : headers} );
  }
 
}