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

  categoryBlogs = []

  categories = []

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.blogService.getBlogsForCategory(res.id)
      .then((res: any) => {
        console.log(res)
        this.categoryBlogs = res
      })
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

}
