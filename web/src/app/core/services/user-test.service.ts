import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserTest} from '../../shared/models/user-test';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserTestService {

  private readonly url: string;
  private readonly saveUrl: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8765/api/profile/users';
    this.saveUrl = 'http://localhost:8765/api/profile/saveUser';
  }

  public getUsers(): Observable<UserTest[]> {
    return this.http.get<UserTest[]>(this.url);
  }

  public saveUser(user: UserTest) {
    return this.http.post<UserTest>(this.saveUrl, user);
  }
}
