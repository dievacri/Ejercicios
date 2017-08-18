import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {IUser} from "../_Models/IUser";

@Injectable()
export class LoginService {

  LoginObserver: Observable<any>;
  baseUrl: string = 'http://localhost:3000/';

  constructor(private http: Http) { }

  login(user: IUser) {
    const requestUrl = `${this.baseUrl}users?username=${user.username}&password=${user.password}`;
    return this.LoginObserver = this.http.get(requestUrl).map(res => res.json());
  }

}
