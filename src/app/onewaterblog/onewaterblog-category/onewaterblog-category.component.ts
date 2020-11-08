import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaterblog-category',
  templateUrl: './onewaterblog-category.component.html',
  styleUrls: ['./onewaterblog-category.component.scss']
})
export class OnewaterblogCategoryComponent implements OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}
