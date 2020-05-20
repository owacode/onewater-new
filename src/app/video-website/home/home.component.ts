import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toRender='signup';
  carouselOptions = {
    margin: 25,
    nav: true,
    dots:false,

    stagePadding: 50,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0
      },
    600: {
        items: 2,
      },
      1100: {
        items: 3,

      },
      1500: {
        items: 3,

      }
    }
  }
  public landingVideo;
  public landingVideoLink;
  public featuredvideos;
  public latestvideos;
  public likesvideos;
  public water;
  public wastewater;
  public stormwater;
  public innovationresearch;
  public sustainabledevelopment;
  public managementsinance;
  public legistativeregulatory;
  singleliked;
  public form: FormGroup;
  public submitted: Boolean=false;
  safeSrc: SafeResourceUrl;
  constructor(public commonservice:CommonService, public modal: ModalFunctions,  private sanitizer: DomSanitizer) { }

ngOnInit() {
this.form=new FormGroup({
  title: new FormControl(null,{validators:[Validators.required]}),
  video_link: new FormControl(null,{validators:[Validators.required]}),
  desc: new FormControl(null,{validators:[Validators.required]})
})
 //owl carousel settings
  // this.commonservice.getVideoByViews()
  //       .subscribe(result=>{
  //         this.featuredvideos=result.result.slice(0,10)
  //         //console.log(this.featuredvideos,'hittt')
  //       })

  this.commonservice.getLandingVideo()
  .subscribe(result=> {
    this.landingVideo = result.result;
    
    const link=this.getId(result.result.video_link);
    this.landingVideoLink=`https://www.youtube.com/embed/${link}`;
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.landingVideoLink);
    ////console.log(this.landingVideo);
    this.landingVideoLink = this.landingVideo['video_link'];
    //console.log("video-link", this.landingVideoLink);
  })

  this.commonservice.getHomeVideoByCategory('water')
    .subscribe(result=>{
      this.water=result.result.slice(0,10)
      //console.log(this.water,'hittt water')
    })

    this.commonservice.getHomeVideoByCategory('wastewater')
    .subscribe(result=>{
      this.wastewater=result.result.slice(0,10)
      //console.log(this.wastewater,'hittt wastewater')
    })

    this.commonservice.getHomeVideoByCategory('stormwater')
    .subscribe(result=>{
      this.stormwater=result.result.slice(0,10)
      //console.log(this.featuredvideos,'hittt stormwater')
    })

    this.commonservice.getHomeVideoByCategory('research')
    .subscribe(result=>{
      this.innovationresearch=result.result.slice(0,10)
      //console.log(this.featuredvideos,'hittt research')
    })

    this.commonservice.getHomeVideoByCategory('sustainable')
    .subscribe(result=>{
      this.sustainabledevelopment=result.result.slice(0,10)
      //console.log(this.featuredvideos,'hittt sustainable')
    })


    this.commonservice.getHomeVideoByCategory('mgmt')
    .subscribe(result=>{
      this.managementsinance=result.result.slice(0,10)
      //console.log(this.featuredvideos,'hittt mgmt')
    })

    this.commonservice.getHomeVideoByCategory('leg')
    .subscribe(result=>{
      this.legistativeregulatory=result.result.slice(0,10)
      //console.log(this.featuredvideos,'hittt leg')
    })

  this.commonservice.getLatestvideos()
        .subscribe(result=>{
          this.latestvideos=result.result.slice(0,12)
          //console.log(this.latestvideos,'hittt')
        })

        this.commonservice.getVideoByLikes()
        .subscribe(result=>{
          this.singleliked=result.result[0]
          this.likesvideos=result.result.slice(1,5);
          //console.log(this.likesvideos,'hittt likedd')
        })


}

getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length == 11) {
      return match[2];
  } else {
      return 'error';
  }
}

addVideo() {
  this.submitted=true;
  //console.log(this.form.value);
  if(this.form.invalid) {
    this.modal.hideBtnLoader();
    return;
    
  }
  //console.log(this.form.value);
  this.commonservice.postVideo(this.form.value)
  .subscribe(result=> {
    //console.log(result);
    this.modal.hideBtnLoader();
    this.form.reset();
    this.modal.closeModal('#postvideoModal');
    this.modal.openModal('#videoPosted');
    this.submitted=false;
  })
}


}
