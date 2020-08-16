import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Router} from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class CommonService {
  constructor(public http:HttpClient, public route: Router){}

  getLandingVideo(){
    return this.http.get<{status:any,result:any}>("https://onewateracademy.org/api/video/primevideo");
  }
  postVideo(data){
    return this.http.post<{status:any,msg:any,result:any}>("https://onewateracademy.org/api/video/post-authorvideo",data);
  }

  getLatestvideos(){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewateracademy.org/api/video/videos");
  }

  getVideoByLikes(){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewateracademy.org/api/video/videobylikes");
  }

  getVideoByViews(){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewateracademy.org/api/video/videobyviews");
  }


  getVideoByCategory(category){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewateracademy.org/api/video/categoryvideos/"+category);
  }

  getHomeVideoByCategory(category){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewateracademy.org/api/video/homecategoryvideos/"+category);
  }

  getCategoryVideoByLikes(category){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewateracademy.org/api/video/categoryvideoslikes/"+category);
  }

  getCategoryVideoByViews(category){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewateracademy.org/api/video/categoryvideosviews/"+category);
  }

  getLikes(videoid){
    return this.http.get<{items:any}>(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoid}&key=AIzaSyBreX2usJ827boe6ZjEJ2KUdT9Uwbuui08`);
  }

  getsinglevideos(id){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewateracademy.org/api/video/video/"+id);
  }

  updatelikes(values){
    this.http.patch('https://onewateracademy.org/api/video/likesandviews',values)
    .subscribe(result=>{
      //console.log(result);
    })
}

}
