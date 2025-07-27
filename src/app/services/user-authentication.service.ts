import { Injectable, signal } from '@angular/core';
import { QuickHttp } from '@jaslay/http';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  user = signal<User | null>(null);

  loginModalIsActive = signal<boolean>(false);
  signupModalIsActive = signal<boolean>(false);

  baseUrl: string = 'https://e-commerce-back-pre-prod.up.railway.app/';
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  quickHttp: QuickHttp;

  constructor() {
    this.quickHttp = new QuickHttp(this.baseUrl, this.headers);
  }

  async login(payload: Login) {
    await this.quickHttp.post('api/login', payload);
    this.loadUserInfos();
  }

  async register(payload: Register) {
    await this.quickHttp.post('api/signup', payload);
  }

  async loadUserInfos() {
    const response = await this.quickHttp.get('api/user');
    const payload = response.payload as User;
    if (response.status === 'Success') {
      this.user.set({
        name: payload.name,
        email: payload.email,
      });
    }
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
