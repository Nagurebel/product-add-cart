import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { UsersForm } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  url = environment.BASE_URL;

  registerPost(data: any) {
    return this.httpClient.post<{
      error: boolean;
      message: any;
      token: any;
      data: UsersForm[];
    }>(`${this.url}register`, data);
  }

  loginPost(data: any) {
    return this.httpClient.post<{
      error: boolean;
      message: any;
      token: any;
      data: UsersForm[];
    }>(`${this.url}login`, data);
  }

  getToken() {
    localStorage.getItem('token');
  }
}
