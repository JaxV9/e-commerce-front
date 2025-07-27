import { Injectable, signal } from '@angular/core';
import { QuickHttp, ResAction } from '@jaslay/http';


@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  loginModalIsActive = signal<boolean>(false);
  signupModalIsActive = signal<boolean>(false);  

  baseUrl: string = 'https://e-commerce-back-pre-prod.up.railway.app/';
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  quickHttp: QuickHttp;

  constructor() {
    this.quickHttp = new QuickHttp(this.baseUrl, this.headers);
  }

  async login(payload: Login) {
    await this.quickHttp.post('api/login', payload);
  }

  async register(payload: Register) {
    await this.quickHttp.post('api/signup', payload);
  }
}

export interface Login {
  email: string;
  password: string;
}

export interface Register extends Login {
  name: string;
  role: string;
}

