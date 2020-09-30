import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service';
import * as $ from 'jquery';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ModalFunctions } from '../shared-functions/modal-functions';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { AuthorAuthService } from '../authors/services/author-auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  form:FormGroup;
  isBlog:Boolean;
  public submited: Boolean = false;


toggleHeader() {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      if (
        event['url'] == '/signup-role' ||
        event['url'] == '/login-role' ||
        event['url'] == '/signup' ||
        event['url'] == '/login' ||
        event['url'] == '/instructor-form' ||
        event['url'].includes('/onewaterblog/author/') ||
        //event['url'].includes('/onewaterblog/mayor/') ||
        //event['url'].includes('/onewaterblog/cro/') ||
        event['url'].includes('/instructor/') ||
        event['url'].includes('/onewater-guru') ||
        //event['url'].includes('/owa-bas') ||
        event['url'].includes('/onewaterblog/category') ||
        event['url'].includes('/onewatertalks/video-category')) {
        $('header').addClass('black-header');
      }
      else {
        $('header').removeClass('black-header');
      }

      if (event['url'].includes('/onewaterblog'))
      this.isBlog = true;
      else
      this.isBlog = false;
    }
   // console.log("is blog",this.isBlog)
  });
}



 toggleDropdown(element){
  if($(window).width() < 1091){
  var panel = document.getElementById(element);
  if (panel.style.display === "none") {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
}
}

  constructor(public http: HttpClient, public auth: AuthService, public author: AuthorAuthService, public router: Router, public modal:ModalFunctions) {
    //this.showAuhtorLogin();
    this.toggleHeader();
   }
  ngOnInit() {
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    const logo = document.querySelector('.logo');
    const hamburger = document.querySelector('.hamburger');
    const menulink = document.querySelectorAll('.navlink a');
    //document.querySelector('.mobile-dropdown').addEventListener("click",this.toggleUserPanel);



    let fixHeader = function () {
      if ($(window).scrollTop() > 70) {
        $(header).addClass("fixed-header");
       // //console.log("fix header");
      }
      else {
        $(header).removeClass("fixed-header");
        ////console.log("remove header");
      }
    }
    let showMenu = function () {
      $(menu).toggleClass('show-menu');
      $(logo).toggleClass('mobile-logo');
      $(hamburger).toggleClass('clicked');
    }

    $(window).on("scroll", fixHeader );
    $(hamburger).on("click", showMenu);
    $(menulink).on("click", showMenu);
    this.form= new FormGroup({
      firstname:new FormControl(null, {validators:[Validators.required]}),
      lastname:new FormControl(null, {validators:[Validators.required]}),
      email:new FormControl(null, {validators:[Validators.required,Validators.email]}),
    })
  }
  subscribe(){
    this.submited = true;
    //console.log(this.form.value);
    if(this.form.invalid){
      //console.log("Invalid newsletter details");
      this.modal.hideBtnLoader();
      return;
    }
    this.http.post<{ status: string}>('https://onewateracademy.org/api/blog/subscribe',this.form.value)
    .subscribe(result=>{
      if(result.status == "error"){
        //console.log(result,'already suscribed');
        this.modal.hideBtnLoader();
        this.modal.closeModal('#subscribeModal');
        this.modal.openModal("#alreadysubscribedmodal");
        this.form.reset();
      this.submited = false;
        return;
      }
      //console.log(result,'suscribed successfully');
      this.modal.hideBtnLoader();
      this.modal.closeModal('#subscribeModal');
      this.modal.openModal("#thanksmodal");
      this.form.reset();
      this.submited = false;
    })
  }
  // login() {
  //   this.http.get('https://onewateracademy.org/api/instructor')
  //     .subscribe(result => {
  //       //console.log(result);
  //     })
  // }
  logout() {
    this.auth.logout();
  }
  logoutAuthor(){
    this.author.logout();
  }
  deleteCookie(name) {
    this.createCookie(name, null);
  }
  createCookie(key, value) {
    let cookie = escape(key) + "=" + escape(value) + ";";
    document.cookie = cookie;
    //console.log(cookie);
    //console.log("Creating new cookie with key: " + key + " value: " + value);
  }
}
