import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    if (localStorage.getItem('Token') === 'true') {
      return true;
    } else return false; 
  }
}
