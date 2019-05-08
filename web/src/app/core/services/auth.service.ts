import { Injectable } from '@angular/core';
import {RegistrationModel} from '../../shared/models/registration.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registration(userData: RegistrationModel) {
    console.log('from service');
    console.log(userData);
  }

  login(user: User) {
    const loginUrl = 'http://localhost:4000/api/auth/login';
    return this.http.post<User>(loginUrl, user)
      .do()
     // .shareReplay();
  }
}
