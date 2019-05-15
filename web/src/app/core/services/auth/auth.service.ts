import { Injectable } from '@angular/core';
import {RegistrationModel} from '../../../shared/models/registration.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../shared/models/User';
import {AuthLoginInfo} from './login-info';
import {SignUpInfo} from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8765/api/auth/signin';
  private signupUrl = 'http://localhost:8765/api/auth/signup';

  constructor(private http: HttpClient) { }

  /*registration(userData: RegistrationModel) {
    console.log('from service');
    console.log(userData);
  }*/

  /*attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }*/

  /*attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post<any>('http://localhost:8080/token/generate-token', credentials);
  }*/

  attemptAuth(credentials: AuthLoginInfo): Observable<any> {
    // const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post<any>('http://localhost:8765/api/auth/token/generate-token', credentials);
  }

  signUp(info: SignUpInfo): Observable<string> {
    console.log(info);
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
