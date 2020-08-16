import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthorAuthService } from "./author-auth.service";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(
    public http: HttpClient,
    public route: Router,
    public blogauth: AuthorAuthService
  ) {}

  addBlog(value) {
    const data = new FormData();
    let count = value.data.split(" ").length;
    let min = Math.ceil(count / 250);
    //console.log(min.toString(), "fef");
    //console.log(count, "iihiji");
    data.append("title", value.title);
    data.append("authorid", this.blogauth.authorapprovedid);
    data.append("authorname", this.blogauth.authorname);
    data.append("authorimage", localStorage.getItem("image"));
    data.append("image", value.image);
    data.append("desc", value.data);
    data.append("readtime", min.toString());
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewateracademy.org/api/blog/unapproved-blog",
        data
      )
      .subscribe(result => {
        //console.log(result);
      });
  }

  uploadImage(image) {
    const imageform = new FormData();
    imageform.append("image", image);

    return this.http.post<{ imagepath: any }>(
      "https://onewateracademy.org/api/blog/addimage",
      imageform
    );
  }

  addSavedBlogWithImage(value) {
    const data = new FormData();
    let count = value.data.split(" ").length;
    let min = Math.ceil(count / 250);
    //console.log(min.toString(), "fef");
    //console.log(count, "iihiji");
    data.append("savedid", value.id);
    data.append("title", value.title);
    data.append("authorid", this.blogauth.authorapprovedid);
    data.append("authorname", this.blogauth.authorname);
    data.append("authorimage", localStorage.getItem("image"));
    data.append("image", value.image);
    data.append("desc", value.data);
    data.append("readtime", min.toString());
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewateracademy.org/api/blog/saved-unapproved-blog-with-image",
        data
      )
      .subscribe(result => {
        //console.log(result);
        // alert(result.msg);
      });
  }
  addSavedBlog(value) {
    let count = value.data.split(" ").length;
    let min = Math.ceil(count / 250);
    //console.log(min.toString(), "fef");
    //console.log(count, "iihiji");

    const saveblog = {
      savedid: value.id,
      title: value.title,
      desc: value.data,
      readtime: min.toString(),
      image: value.image,
      authorid: this.blogauth.authorapprovedid,
      authorname: this.blogauth.authorname,
      authorimage: localStorage.getItem("image")
    };
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewateracademy.org/api/blog/saved-unapproved-blog",
        saveblog
      )
      .subscribe(result => {
        //console.log(result);
        // alert(result.msg);
      });
  }

  addToSavedBlog(value) {
    const data = new FormData();
    data.append("title", value.title);
    data.append("authorid", this.blogauth.authorapprovedid);
    data.append("image", value.image);
    data.append("desc", value.data);
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/save-blog",
      data
    );
  }

  updateToSavedBlog(value) {
    const saveblog = {
      id: value.id,
      title: value.title,
      desc: value.data
    };
    return this.http.patch<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/update-saved-blog",
      saveblog
    );
  }

  updateToSavedBlogWithImage(value) {
    const data = new FormData();
    data.append("id", value.id);
    data.append("title", value.title);
    data.append("desc", value.data);
    data.append("image", value.image);
    return this.http.patch<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/updateimage-saved-blog",
      data
    );
  }

  addVideo(values) {
    this.http
      .post("https://onewateracademy.org/api/blog/post-video", values)
      .subscribe(result => {
        //console.log(result);
        //alert("Video Posted Successfully");
      });
  }

  getAllVideos() {
    const data = {
      email: localStorage.getItem("authoremail")
    };
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/singlevideo/" +
        localStorage.getItem("authoremail")
    );
  }

  getAllBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/authorallblogs/" +
        this.blogauth.authorapprovedid
    );
  }

  getSavedBlog(id) {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/savedblogs/" + id
    );
  }

  getSingleSavedBlog(id) {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/singlesavedblog/" + id
    );
  }

  getPendingBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/authorunapprovedblogs/" +
        this.blogauth.authorapprovedid
    );
  }

  getApprovedBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/authorapprovedblogs/" +
        this.blogauth.authorapprovedid
    );
  }

  getSingleApprovedBlogs(id) {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/singleappblog/" + id
    );
  }

  getUser() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/single-author/" +
        this.blogauth.authorapprovedid
    );
  }

  getSingleAllBlog(id) {
    //console.log(id, "jjj");
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/allblogs/" + id
    );
  }

  deleteApproveBlog(mainid, approveid) {
    const id = {
      mainid: mainid,
      approveid: approveid
    };
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/deleteapproveblog",
      id
    );
  }

  deleteUnApproveBlog(mainid, unapproveid) {
    const id = {
      mainid: mainid,
      unapproveid: unapproveid
    };
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewateracademy.org/api/blog/deleteunapproveblog",
      id
    );
  }
}
