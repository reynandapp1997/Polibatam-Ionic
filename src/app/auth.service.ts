import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: Http) { }

  login(username, password) {
    return this.http.post('https://polibatam-api.herokuapp.com/api/user/login', {
      username,
      password
    });
  }
}
