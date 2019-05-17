import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthLoginInfo} from '../../authentication/login-info';
import {SignUpInfo} from '../../authentication/signup-info';
import {Config} from 'protractor';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signInUrl = 'http://localhost:8765/auth';
  private signUpUrl = 'http://localhost:8765/auth/signup';

  constructor(private http: HttpClient) { }


  attemptAuth(credentials: AuthLoginInfo): Observable<HttpResponse<Config>> {
    return this.http.post<Config>(
      this.signInUrl, credentials, { observe: 'response' });
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signUpUrl, info, httpOptions);
  }

  getInfo(): Observable<any> {
    return this.http.get('http://localhost:8765/gallery', {responseType: 'text'});
  }

}
