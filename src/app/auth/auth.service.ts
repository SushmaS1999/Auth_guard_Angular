import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkusernameandpassword(username: string, password: string) {
    if (username == "admin" && password == "123456") {

      localStorage.setItem('username', username);
      localStorage.setItem("password",password);
      return true;
    }
    else {
      return false;
    }
  }
}
