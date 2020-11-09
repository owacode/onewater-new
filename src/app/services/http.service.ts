import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Headers } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) { }

  private initUrl(url) {
    return `${environment.backendURL}${url}`;
  }

  postToBackend(url, data) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.initUrl(url), data)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get(url, token = null) {
    const headers: HttpHeaders = new HttpHeaders();
    if (!token) {
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
    } else {
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Authorization', `Bearer ${token}`);
    }
    return new Promise((resolve, reject) => {
      this.http
        .get(this.initUrl(url), { headers })
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getByParmas(url, data) {
    return new Promise((resolve) => {
      this.http
        .get(`${this.initUrl(url)}/${data}`)
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
  }
}
