import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-onewaterblog-category',
  templateUrl: './onewaterblog-category.component.html',
  styleUrls: ['./onewaterblog-category.component.scss']
})
export class OnewaterblogCategoryComponent implements OnInit {

  constructor(public blogService: BlogService, public route: ActivatedRoute) { }

  categoryBlogs = [
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
      'name': 'Water',
      'id': 1
    },
    {
      'img': 'assets/img/icons/waste-water.svg',
      'name': 'Waste Water',
      'id': 1360
    },
    {
      'img': 'assets/img/icons/storm.svg',
      'name': 'Storm Water',
      'id': 1361
    },
    {
      'img': 'assets/img/icons/research.svg',
      'name': 'Innovation & Research',
      'id': 1362
    },
    {
      'img': 'assets/img/icons/sustainable.svg',
      'name': 'Sustainable Development',
      'id': 1363
    },
    {
      'img': 'assets/img/icons/finance.svg',
      'name': 'Management & Finance',
      'id': 1364
    },
    {
      'img': 'assets/img/icons/regulatory.svg',
      'name': 'Legislative & Regulatory',
      'id': 1365
    },
  ]

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.blogService.getBlogsForCategory(res.id)
      .then((res: any) => {
        console.log(res)
        this.categoryBlogs = res
      })
    })
  }

}
