import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  loginModalIsActive = signal<boolean>(true);
  signupModalIsActive = signal<boolean>(false);

  constructor() {}
}
