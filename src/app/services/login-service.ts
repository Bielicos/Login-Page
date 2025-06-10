import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {

  }

  Login(email: String, password: String) {
    return this.httpClient.post('/login', { email, password });
  }
}
