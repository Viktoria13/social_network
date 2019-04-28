import { Injectable } from '@angular/core';
import {RegistrationModel} from '../../shared/models/registration.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registration(userData: RegistrationModel) {
    console.log('from service');
    console.log(userData);
  }
}
