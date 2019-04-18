import { Injectable } from '@angular/core';
import {RegistrationModel} from '../../shared/models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registration(userData: RegistrationModel) {
    console.log('from service');
    console.log(userData.username);
  }
}
