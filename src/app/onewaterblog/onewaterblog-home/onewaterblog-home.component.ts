import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { BlogService } from 'src/app/services/blog.service';
import { HttpService } from 'src/app/services/http.service';
declare var $:any;

@Component({
  selector: 'app-onewaterblog-home',
  templateUrl: './onewaterblog-home.component.html',
  styleUrls: ['./onewaterblog-home.component.scss']
})
export class OnewaterblogHomeComponent implements OnInit {

  currentSlide:number = 1;
  featuredBlogs = [];
  popularBlogs = [];
  latestBlogs = [];
  bannerBlogs = []
  latestBlogsLeft = [];
  latestBlogsRight = [];

  categories = [
    // {
    //   'img': 'assets/img/icons/water.svg',
    //   'name': 'Water',
    //   'id': 1
    // },
    // {
    //   'img': 'assets/img/icons/waste-water.svg',
    //   'name': 'Waste Water',
    //   'id': 1360
    // },
    // {
    //   'img': 'assets/img/icons/storm.svg',
    //   'name': 'Storm Water',
    //   'id': 1361
    // },
    // {
    //   'img': 'assets/img/icons/research.svg',
    //   'name': 'Innovation & Research',
    //   'id': 1362
    // },
    // {
    //   'img': 'assets/img/icons/sustainable.svg',
    //   'name': 'Sustainable Development',
    //   'id': 1363
    // },
    // {
    //   'img': 'assets/img/icons/finance.svg',
    //   'name': 'Management & Finance',
    //   'id': 1364
    // },
    // {
    //   'img': 'assets/img/icons/regulatory.svg',
    //   'name': 'Legislative & Regulatory',
    //   'id': 1365
    // },
  ]

  @ViewChild(OwlCarousel) landingCarousel: OwlCarousel;

  landingBlogsCarousel = {
    margin: 25,
    nav: false,
    loop:true,
    dots: false,
    stagePadding: 0,
    items: 1
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

  constructor(public http: HttpService, public blogService: BlogService) { }

  ngOnInit() {
this.blogService.getAllBlogs().then((res: any) => {
  this.latestBlogs = res
  this.featuredBlogs = this.latestBlogs.filter(blog => blog.featured == 'True')
  console.log(this.featuredBlogs, this.latestBlogs);
//  let half = Math.ceil(this.latestBlogs.length / 2);
//   this.latestBlogsLeft = this.latestBlogs.slice(0,half);
//   this.latestBlogsRight = this.latestBlogs.slice(half,this.latestBlogs.length);
})
this.blogService.getBlogCategories()
.then((res: any) => {
  res.forEach(element => {
    if(element.name == "Innovation and Research")
    this.categories.push({ name: "Innovation and Research", id: element.id, img: 'assets/img/icons/research.svg'})
    else if(element.name == "Legislative and Regulatory")
    this.categories.push({ name: "Legislative and Regulatory", id: element.id, img: 'assets/img/icons/regulatory.svg'})
    else if(element.name == "Management &amp; Finance")
    this.categories.push({ name: "Management &amp; Finance", id: element.id, img: 'assets/img/icons/finance.svg'})
    else if(element.name == "Storm Water")
    this.categories.push({ name: "Storm Water", id: element.id, img: 'assets/img/icons/storm.svg'})
    else if(element.name == "Sustainable Development")
    this.categories.push({ name: "Sustainable Development", id: element.id, img: 'assets/img/icons/sustainable.svg'})
    else if(element.name == "Waste Water")
    this.categories.push({ name: "Waste Water", id: element.id, img: 'assets/img/icons/waste-water.svg'})
    else if(element.name == "Water")
    this.categories.push({ name: "Water", id: element.id, img: 'assets/img/icons/water.svg'})
    else
    this.categories.push({ name: element.name, id: element.id, img: 'assets/img/icons/default-category.svg'})
  });
})
 }

  next(){
    this.owlNext(this.landingCarousel);
    if(this.currentSlide == this.bannerBlogs.length)
    this.currentSlide = 1;
    else
    this.currentSlide++;
  }

  prev(){
    this.owlPrev(this.landingCarousel);
    if(this.currentSlide < 1)
      this.currentSlide = this.bannerBlogs.length;
    else
    this.currentSlide--;
  }


  owlNext(owl:OwlCarousel){
    owl.next();
  }
  owlPrev(owl:OwlCarousel){
    owl.previous();
  }

}
