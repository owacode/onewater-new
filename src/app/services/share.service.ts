import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class ShareService {
  user: any = null;
  token: string = null;

  constructor(private storage: StorageService, public router: Router, public http: HttpService) {
    this.user = this.storage.getUser();
    this.token = this.storage.getToken();
  }

  updateUser(user) {
    this.user = user;
  }

  updateToken(token) {
    this.token = token;
  }

  logout(btn = "#logout-btn") {

    this.http.postToBackend('/users/logout', {userId: this.user.id})
    .then((res: any) => {
      if(res.statusCode === 7000 ) {
        this.storage.destroyToken();
        this.storage.destroyUser();
        this.user = null;
        this.token = null;
        this.router.navigate(['/get-started/login'])
      } else {
        alert(res.message)
      }
    })
    .catch(err => {
      console.log(err);
      alert(err)
    })
  }

}
