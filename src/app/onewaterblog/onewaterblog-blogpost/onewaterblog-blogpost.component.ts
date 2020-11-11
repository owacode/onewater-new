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
    {
      category:'Water',
      date:'2 October, 2020',
      title:'Deep Diving into the Water Sector – Gaining Insights on Current Workforce Needs',
      readingTime:5,
      img:'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      category:'Water',
      date:'2 October, 2020',
      title:'Deep Diving into the Water Sector – Gaining Insights on Current Workforce Needs',
      readingTime:5,
      img:'https://images.pexels.com/photos/5589173/pexels-photo-5589173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      category:'Water',
      date:'2 October, 2020',
      title:'Deep Diving into the Water Sector – Gaining Insights on Current Workforce Needs',
      readingTime:5,
      img:'https://images.pexels.com/photos/1137340/pexels-photo-1137340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      category:'Water',
      date:'2 October, 2020',
      title:'Deep Diving into the Water Sector – Gaining Insights on Current Workforce Needs',
      readingTime:5,
      img:'https://images.pexels.com/photos/2123913/pexels-photo-2123913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      category:'Water',
      date:'2 October, 2020',
      title:'Deep Diving into the Water Sector – Gaining Insights on Current Workforce Needs',
      readingTime:5,
      img:'https://images.pexels.com/photos/4245856/pexels-photo-4245856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      category:'Water',
      date:'2 October, 2020',
      title:'Deep Diving into the Water Sector – Gaining Insights on Current Workforce Needs',
      readingTime:5,
      img:'https://images.pexels.com/photos/1040492/pexels-photo-1040492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  ]
  blog;
  constructor(public blogService: BlogService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      this.blogService.getSingleBlog(res.id)
      .then((res: any) => {
        console.log(res)
        this.blog = res;

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

  owlNext(owl:OwlCarousel){
    owl.next();
  }
  owlPrev(owl:OwlCarousel){
    owl.previous();
  }

}
