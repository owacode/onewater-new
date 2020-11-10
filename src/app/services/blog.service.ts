import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getAllBlogs(limit: number = 10){
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
              category: blog._embedded['wp:term'][0][0].name,
              dateAdded: blog.date,
              featured: blog.featured,
              readingTime: 5
            }
          })
          return tempBlogs
        })
      ).toPromise();
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
              category: blog._embedded['wp:term'][0][0].name,
              dateAdded: blog.date,
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
