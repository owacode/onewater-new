import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlCarousel } from 'ngx-owl-carousel';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-onewaterblog-blogpost',
  templateUrl: './onewaterblog-blogpost.component.html',
  styleUrls: ['./onewaterblog-blogpost.component.scss']
})
export class OnewaterblogBlogpostComponent implements OnInit {


  popularBlogs = [
  ]
  blog;
  constructor(public blogService: BlogService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      this.blogService.getSingleBlog(res.id)
      .then((res: any) => {
        console.log(res)
        this.blog = res;
        this.sameCategoryBlogs(this.blog.categories[0])
        this.blog.thumbnail = this.blogService.findThumbnail(this.blog.content.rendered);
        
      })
    })
  }

  popularBlogsCarousel = {
    margin: 10,
    nav: false,
    loop:true,
    dots: false,
    stagePadding: 0,
    items: 4,
    responsiveClass:true,
    responsive: {
      0:{
        items:1,
        stagePadding:0
      },
      480:{
        items: 1,
        stagePadding:50
      },
      576: {
        items: 1,
        stagePadding:100
      },
      630:{
        items: 2,
        stagePadding:0
      },
      800: {
        items: 2,
        stagePadding:100
      },
      991: {
        items: 3,
      },
     1200: {
        items: 4,
      }
    }
  }

  sameCategoryBlogs(categoryId) {
    this.blogService.getBlogsForCategory(categoryId).then((res: any) => {
      console.log(res);
      this.popularBlogs = res.filter(b => {
        return b.id !== this.blog.id
      });
    });
  }

  owlNext(owl:OwlCarousel){
    owl.next();
  }
  owlPrev(owl:OwlCarousel){
    owl.previous();
  }

}
