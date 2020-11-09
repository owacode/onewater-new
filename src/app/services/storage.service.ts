import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private set(name, data) {
    return window.localStorage.setItem(name, JSON.stringify(data));
  }

  private get(name) {
    const data = window.localStorage.getItem(name);
    if (data) { return JSON.parse(data); } else { return null; }
  }

  saveUser(data) {
    return this.set('user', data);
  }

  saveToken(data) {
    return this.set('token', data);
  }

  getToken() {
    return this.get('token');
  }

  getUser() {
    return this.get('user');
  }

  destroyUser() {
    return window.localStorage.removeItem('user');
  }

  destroyToken() {
    return window.localStorage.removeItem('token');
  }
}
