import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
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
  bannerBlogs = [
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

  categories = [
    {
      'img': 'assets/img/icons/water.svg',
      'name': 'Water'
    },
    {
      'img': 'assets/img/icons/waste-water.svg',
      'name': 'Waste Water'
    },
    {
      'img': 'assets/img/icons/storm.svg',
      'name': 'Storm Water'
    },
    {
      'img': 'assets/img/icons/research.svg',
      'name': 'Innovation & Research'
    },
    {
      'img': 'assets/img/icons/sustainable.svg',
      'name': 'Sustainable Development'
    },
    {
      'img': 'assets/img/icons/finance.svg',
      'name': 'Management & Finance'
    },
    {
      'img': 'assets/img/icons/regulatory.svg',
      'name': 'Legislative & Regulatory'
    },
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

  constructor() { }

  ngOnInit() {
this.featuredBlogs = this.bannerBlogs;
this.popularBlogs = this.bannerBlogs;
this.latestBlogs = this.bannerBlogs;
this.latestBlogs.concat(this.bannerBlogs);
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
