import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /*Flag used en guards */
  loggedIn = true;
  constructor() { }
}
