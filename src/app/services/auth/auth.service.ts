import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface UserSession {
  id?: number;
  nome?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private SESSION_NAME: string = 'reuniao-diretoria-session';

  private usuario?: UserSession;

  constructor(private router: Router) {}

  saveUser(data: UserSession) {
    this.usuario = data;
  }

  getUser(): UserSession | undefined {
    return this.usuario;
  }

  removeUser() {
    this.usuario = undefined;
  }

  saveSession(token: string| undefined|null) {
    if(token){
      localStorage.setItem(this.SESSION_NAME, token);
    }
  }

  getSession(): string | null {
    return localStorage.getItem(this.SESSION_NAME);
  }

  removeSession() {
    let returnUrl = this.router.url;
    localStorage.removeItem(this.SESSION_NAME);
    this.removeUser();
    this.router.navigate(['login'], {
      queryParams: {
        returnUrl: returnUrl === '/' ? undefined : returnUrl,
      },
    });
  }
}
