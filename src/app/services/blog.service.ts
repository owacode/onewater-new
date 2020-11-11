import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
declare var $:any;

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getAllBlogs(limit: number = 50){
    return this.http
      .get<any>(
        `https://onewateronefuture.com/wp-json/wp/v2/posts?_embed&per_page=${limit}`
      )
      .pipe(
        map((blogs) => {
          let tempBlogs = blogs.map(blog => {
            return {
              id: blog.id,
              title: blog.title.rendered,
              author: blog._embedded.author[0].name,
              authorImg: blog._embedded.author[0].avatar_urls['24'],
              category: blog._embedded['wp:term'][0][0].name,
              dateAdded: blog.date,
              thumbnail:this.findThumbnail(blog.content.rendered), 
              featured: blog.featured,
              readingTime: 5
            }
          })
          return tempBlogs
        })
      ).toPromise();
  }

  findThumbnail(htmlString: string): string {
    //console.log("blog thumb functions");

    if(htmlString.match('(<img .*?>)')){
      const imgTag: string = htmlString.match('(<img .*?>)')[0].toString();
      const image = $(imgTag).attr('src');

      return image;
    }
   
    else
    return 'assets/img/blog-default.jpg';
   
  }

  getSingleBlog(blogId: number) {
    return this.http
      .get<any>(
        `https://onewateronefuture.com/wp-json/wp/v2/posts/${blogId}?_embed`
      )
      .toPromise();
  }

  getBlogsForCategory(
    fetchCategoryId: string,
    perPage: number = 100
  ) {
    return this.http
      .get<any>(
        `https://onewateronefuture.com/wp-json/wp/v2/posts?categories=${fetchCategoryId}&per_page=${perPage}&_embed`
      )
      .pipe(
        map((blogs) => {
          let tempBlogs = blogs.map(blog => {
            return {
              id: blog.id,
              title: blog.title.rendered,
              author: blog._embedded.author[0].name,
              thumbnail:this.findThumbnail(blog.content.rendered), 
              authorImg: blog._embedded.author[0].avatar_urls['24'],
              category: blog._embedded['wp:term'][0][0].name,
              dateAdded: blog.date,
              content: blog.content.rendered,
              readingTime: 5
            }
          })
          return tempBlogs
        })
      ).toPromise();
  }

  getBlogCategories() {
    return this.http
      .get<Array<Object>>(
        `https://onewateronefuture.com/wp-json/wp/v2/categories?per_page=28`
      )
      .pipe(
        map((blogCategories) => {
          let finalCats = [];
          blogCategories.forEach((item) => {
            finalCats.push({
              name: item['name'].toString(),
              id: item['id'],
              slug: item['slug'],
            });
          });
          return finalCats;
        })
      ).toPromise();
  }

  getMatchingBlogs(
    searchWord: string,
    limit: number = 100
  ): Observable<Array<Object>> {
    if (!searchWord) {
      return;
    }
    // Searches in the 100 recent blogs by default
    return this.http
      .get<Array<Object>>(
        `https://onewateronefuture.com/wp-json/wp/v2/posts?_embed&per_page=${limit}`
      )
      .pipe(
        map((allBlogs) => {
          let listOfBlogs = [];
          allBlogs.forEach((item) => {
            let blogTitle = item['title']['rendered'].toString();
            if (blogTitle.includes(searchWord)) {
              listOfBlogs.push(item);
            }
          });
          return listOfBlogs;
        })
      );
  }
}
