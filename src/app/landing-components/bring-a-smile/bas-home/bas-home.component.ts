import { Component, OnInit } from '@angular/core';
import { Lightbox,LightboxConfig  } from 'ngx-lightbox';


@Component({
  selector: 'app-bas-home',
  templateUrl: './bas-home.component.html',
  styleUrls: ['./bas-home.component.scss']
})
export class BasHomeComponent implements OnInit {


  tab:number;
  constructor(private _lightbox: Lightbox,private _lightboxConfig: LightboxConfig) {
    _lightboxConfig.showZoom = true;
  }

  images = [
     ['https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/994807/pexels-photo-994807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/2110995/pexels-photo-2110995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/2888332/pexels-photo-2888332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
     ['https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/994807/pexels-photo-994807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/2110995/pexels-photo-2110995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/2888332/pexels-photo-2888332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
     ['https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/994807/pexels-photo-994807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/2110995/pexels-photo-2110995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/2888332/pexels-photo-2888332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
     ['https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/994807/pexels-photo-994807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/2110995/pexels-photo-2110995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/2888332/pexels-photo-2888332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
     ['https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/994807/pexels-photo-994807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/2110995/pexels-photo-2110995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/2888332/pexels-photo-2888332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
  ]

  currentImages = [];

  carouselOptions = {
    margin: 25,
    nav: true,
    dots: false,
    stagePadding: 30,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        stagePadding: 50
      },
     1000: {
        items: 3,
      }
    }
  }

  changeTab(tab){
    this.tab = tab;
    //this.currentImages = this.images[tab];
    //this.currentImages = this.images[tab];
    this.images[tab].forEach((el,index) => {
      var obj = {
        src:el,
        thumb:el,
        caption:`Image ${index}`
      }
      this.currentImages.push(obj)
    });
    console.log(this.currentImages);
  }
   

  ngOnInit() {
    this.changeTab(0);
  }


  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.currentImages, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
