(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"7i5T":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=t("S4Jc"),o=function(){function n(n,l,t){this.route=n,this.common=l,this.sanitizer=t,this.carouselOptions={margin:25,nav:!0,dots:!1,stagePadding:50,navText:['<img src="assets/img/icons/prev.svg" style="width:30px;">','<img src="assets/img/icons/next.svg" style="width:30px;">'],responsiveClass:!0,responsive:{0:{items:1,stagePadding:10},600:{items:2},1200:{items:3},1500:{items:3}}}}return n.prototype.ngOnInit=function(){var n=this;this.route.params.subscribe(function(l){n.videoid=l.id,n.url="http://onewateracademy.org/onewatertalks/singlevideo/"+l.id,n.common.getsinglevideos(l.id).subscribe(function(l){n.video=l.result;var t=n.getId(n.video.video_link);n.video.video_link="https://www.youtube.com/embed/"+t,n.safeSrc=n.sanitizer.bypassSecurityTrustResourceUrl(n.video.video_link),n.getlikes(t)})}),this.common.getVideoByLikes().subscribe(function(l){n.likesvideos=l.result;for(var t=0;t<n.likesvideos.length;t++){var e=n.getId(n.likesvideos[t].video_link);n.likesvideos[t].image="https://img.youtube.com/vi/"+e+"/0.jpg"}})},n.prototype.getlikes=function(n){var l=this;this.common.getLikes(n).subscribe(function(n){l.common.updatelikes({id:l.videoid,likeCount:n.items[0].statistics.likeCount,viewCount:n.items[0].statistics.viewCount})})},n.prototype.getId=function(n){var l=n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return l&&11==l[2].length?l[2]:"error"},n}(),u=function(){return function(){}}(),a=t("pMnS"),c=t("ZYCi"),r=t("Ip0R"),d=t("m5X7"),s=t("FEQc"),g=t("MFr9"),m=t("ccPT"),p=t("mct9"),v=t("JheX"),h=t("w0sM"),f=t("cMnJ"),C=t("26NW"),b=t("ZYjt"),M=e["\u0275crt"]({encapsulation:0,styles:[[".video-section[_ngcontent-%COMP%]{margin:0;padding:0!important}.video-section[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{padding:0!important}.my-container[_ngcontent-%COMP%]{padding:1rem 2rem;border-radius:10px;margin:2rem 4vw;box-shadow:0 2px 6px 0 rgba(110,110,110,.2)}.my-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1rem}.thumbnail-card[_ngcontent-%COMP%]{background:#fff;padding:0;margin:.5rem;border-radius:5px;overflow:hidden;cursor:pointer;position:relative;z-index:10}.thumbnail-card[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:200px}.thumbnail-card[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.thumbnail-card[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%]   .hover-play[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;display:flex;justify-content:center;align-items:center;transition:.3s all ease-in-out;opacity:0;background:#285aec9c}.thumbnail-card[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%]   .hover-play[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2.5rem;color:#fff;transform:scale(0);transition:.5s all ease-in-out}.thumbnail-card[_ngcontent-%COMP%]   .thumb-caption[_ngcontent-%COMP%]{position:relative;min-height:120px;display:flex;flex-direction:column;justify-content:space-between}.thumbnail-card[_ngcontent-%COMP%]   .thumb-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{line-height:1.5rem;margin:.5rem}.thumbnail-card[_ngcontent-%COMP%]   .thumb-caption[_ngcontent-%COMP%]   .video-metadata[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:space-between}.thumbnail-card[_ngcontent-%COMP%]   .thumb-caption[_ngcontent-%COMP%]   .video-metadata[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .thumbnail-card[_ngcontent-%COMP%]   .thumb-caption[_ngcontent-%COMP%]   .video-metadata[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%]{margin:0 2px;font-weight:600;font-size:11px;color:#444}.thumbnail-card[_ngcontent-%COMP%]   .thumb-caption[_ngcontent-%COMP%]   .video-metadata[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{text-align:right}.thumb-img[_ngcontent-%COMP%]{height:150px;display:flex;align-items:center;justify-content:center}.thumb-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.thumbnail-card[_ngcontent-%COMP%]:hover   .thumb-img[_ngcontent-%COMP%]   .hover-play[_ngcontent-%COMP%]{opacity:1}.thumbnail-card[_ngcontent-%COMP%]:hover   .thumb-img[_ngcontent-%COMP%]   .hover-play[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transform:scale(1)}.thumbnail-card[_ngcontent-%COMP%]:hover   .thumb-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#0c7be2}.channel[_ngcontent-%COMP%]{font-weight:500;font-size:14px;color:#666;display:none!important}.cover-photo[_ngcontent-%COMP%]{height:80vh;background:linear-gradient(180deg,rgba(0,31,204,.82) 20%,rgba(255,255,255,.68) 100%) bottom center/cover,url(/assets/img/single-video-bg.png) bottom center/cover}.cover-photo[_ngcontent-%COMP%]   .wave[_ngcontent-%COMP%]{bottom:-30%}.video-container[_ngcontent-%COMP%]{margin-top:-60vh}button[_ngcontent-%COMP%]{background:0 0;box-shadow:none;padding:0;margin:0 2px}.iframe-container[_ngcontent-%COMP%]{z-index:2;box-shadow:0 5px 10px 2px rgba(0,0,0,.33);width:85%;height:0;padding-bottom:48%;position:relative;margin:auto;border-radius:12px;overflow:hidden}.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;left:0;top:0;height:100%;width:100%}.video-details[_ngcontent-%COMP%]{z-index:2;position:relative;width:75%;margin:auto;padding:2rem 1rem}.video-name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;margin:0 0 1.5rem;padding:0}.views[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem;color:#666;font-weight:600}.sharing-options[_ngcontent-%COMP%]{text-align:left;display:flex;align-items:center;justify-content:flex-end;margin-right:-1rem}.sharing-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.9rem;font-weight:600;margin-right:12px;color:#666}.sharing-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;margin-left:1rem}.teaser[_ngcontent-%COMP%]{margin:10px 0 35px;font-size:1.05rem;color:#555}.teaser[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:6px 8px;border-radius:4px;background:#f0f0f0;color:#222;font-size:12px;font-weight:600;margin:0 .5rem}.share-btn[_ngcontent-%COMP%]{height:35px;width:35px;border-radius:50%;background:#fff;box-shadow:10px 9px 15px 0 rgba(0,0,0,.28);display:flex;justify-content:center;align-items:center;margin-right:16px;transition:.2s all ease-out}.share-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-weight:500;font-size:.9rem;color:#444;transition:.2s all ease-out}.share-btn[_ngcontent-%COMP%]:hover{box-shadow:10px 9px 15px 0 rgba(0,0,0,.5)}.share-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#0c7be2}.v-desc[_ngcontent-%COMP%]{margin:2rem 1rem 0}.v-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify;color:#666}@media screen and (max-width:768px){.cover-photo[_ngcontent-%COMP%]{height:50vh}.video-details[_ngcontent-%COMP%]{width:85%}.video-container[_ngcontent-%COMP%]{margin-top:-32vh}}@media screen and (max-width:520px){.iframe-container[_ngcontent-%COMP%]{width:100%;padding-bottom:56.3%}.video-details[_ngcontent-%COMP%]{width:100%}.v-desc[_ngcontent-%COMP%]{margin:2rem 0}}"]],data:{}});function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","v-desc"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" About Video: "])),(n()(),e["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](4,null,[" "," "]))],null,function(n,l){var t=l.component;n(l,4,0,null==t.video?null:t.video.desc)})}function O(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,23,"div",[["class","item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,22,"a",[],[[8,"title",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e["\u0275nov"](n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),i},null,null)),e["\u0275did"](2,671744,null,0,c.r,[c.o,c.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](3,2),(n()(),e["\u0275eld"](4,0,null,null,19,"div",[["class","thumbnail-card card-shadow"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,3,"div",[["class","thumb-img"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,1,"div",[["class","hover-play"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-play-circle"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,14,"div",[["class","thumb-caption"]],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,6,"div",[["class","video-name"]],null,null,null,null,null)),(n()(),e["\u0275eld"](11,0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e["\u0275nov"](n,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),i},null,null)),e["\u0275did"](12,671744,null,0,c.r,[c.o,c.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](13,2),(n()(),e["\u0275eld"](14,0,null,null,2,"h5",[],null,null,null,null,null)),(n()(),e["\u0275ted"](15,null,["",""])),e["\u0275ppd"](16,2),(n()(),e["\u0275eld"](17,0,null,null,6,"div",[["class","video-metadata"]],null,null,null,null,null)),(n()(),e["\u0275eld"](18,0,null,null,2,"div",[["class","views"]],null,null,null,null,null)),(n()(),e["\u0275ted"](19,null,[""," views"])),e["\u0275ppd"](20,1),(n()(),e["\u0275eld"](21,0,null,null,2,"div",[["class","date"]],null,null,null,null,null)),(n()(),e["\u0275ted"](22,null,["",""])),e["\u0275ppd"](23,2)],function(n,l){var t=n(l,3,0,"/onewatertalks/singlevideo/",l.context.$implicit._id);n(l,2,0,t);var e=n(l,13,0,"/onewatertalks/singlevideo/",l.context.$implicit._id);n(l,12,0,e)},function(n,l){n(l,1,0,e["\u0275inlineInterpolate"](1,"",null==l.context.$implicit?null:l.context.$implicit.title,""),e["\u0275nov"](l,2).target,e["\u0275nov"](l,2).href),n(l,6,0,null==l.context.$implicit?null:l.context.$implicit.image),n(l,11,0,e["\u0275nov"](l,12).target,e["\u0275nov"](l,12).href);var t=e["\u0275unv"](l,15,0,n(l,16,0,e["\u0275nov"](l.parent,1),null==l.context.$implicit?null:l.context.$implicit.title,35));n(l,15,0,t);var i=e["\u0275unv"](l,19,0,n(l,20,0,e["\u0275nov"](l.parent,0),null==l.context.$implicit?null:l.context.$implicit.views));n(l,19,0,i);var o=e["\u0275unv"](l,22,0,n(l,23,0,e["\u0275nov"](l.parent,2),null==l.context.$implicit?null:l.context.$implicit.date_added,"MMMM d,M"));n(l,22,0,o)})}function P(n){return e["\u0275vid"](0,[e["\u0275pid"](0,r.DecimalPipe,[e.LOCALE_ID]),e["\u0275pid"](0,d.a,[]),e["\u0275pid"](0,r.DatePipe,[e.LOCALE_ID]),(n()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","cover-photo"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,0,"div",[["class","wave"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,37,"div",[["class","container"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,28,"div",[["class","video-container"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,1,"div",[["class","iframe-container "]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["height","315"],["width","560"]],[[8,"src",5]],null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,25,"div",[["class","video-details"]],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,2,"div",[["class","video-name"]],null,null,null,null,null)),(n()(),e["\u0275eld"](11,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e["\u0275ted"](12,null,[" "," "])),(n()(),e["\u0275eld"](13,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](14,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),e["\u0275eld"](15,0,null,null,3,"div",[["class","views"]],null,null,null,null,null)),(n()(),e["\u0275eld"](16,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](17,null,[" "," views "])),e["\u0275ppd"](18,1),(n()(),e["\u0275eld"](19,0,null,null,13,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),e["\u0275eld"](20,0,null,null,12,"div",[["class","sharing-options"]],null,null,null,null,null)),(n()(),e["\u0275eld"](21,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Share "])),(n()(),e["\u0275eld"](23,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-share"]],null,null,null,null,null)),(n()(),e["\u0275eld"](24,0,null,null,2,"button",[],null,null,null,null,null)),(n()(),e["\u0275eld"](25,0,null,null,1,"fb-like",[],null,null,null,s.b,s.a)),e["\u0275did"](26,4243456,null,0,g.FbLikeComponent,[],{url:[0,"url"]},null),(n()(),e["\u0275eld"](27,0,null,null,2,"button",[["style","transform: translateY(7px);"]],null,null,null,null,null)),(n()(),e["\u0275eld"](28,0,null,null,1,"tweet",[],null,null,null,m.b,m.a)),e["\u0275did"](29,4243456,null,0,p.TweetComponent,[],{url:[0,"url"],text:[1,"text"]},null),(n()(),e["\u0275eld"](30,0,null,null,2,"button",[],null,null,null,null,null)),(n()(),e["\u0275eld"](31,0,null,null,1,"linkedin-share",[],null,null,null,v.b,v.a)),e["\u0275did"](32,4243456,null,0,h.LinkedInShareComponent,[],{url:[0,"url"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](34,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](35,0,null,null,7,"div",[["class","related-videos"]],null,null,null,null,null)),(n()(),e["\u0275eld"](36,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" You may also like "])),(n()(),e["\u0275eld"](38,0,null,null,4,"owl-carousel",[],null,null,null,f.b,f.a)),e["\u0275did"](39,311296,null,0,C.OwlCarousel,[e.IterableDiffers],{carouselClasses:[0,"carouselClasses"],options:[1,"options"],items:[2,"items"]},null),e["\u0275pad"](40,3),(n()(),e["\u0275and"](16777216,null,0,1,null,O)),e["\u0275did"](42,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,26,0,e["\u0275inlineInterpolate"](1,"",t.url,"")),n(l,29,0,e["\u0275inlineInterpolate"](1,"",t.url,""),e["\u0275inlineInterpolate"](1,"",t.url,"")),n(l,32,0,e["\u0275inlineInterpolate"](1,"",t.url,"")),n(l,34,0,null==t.video?null:t.video.desc);var i=n(l,40,0,"owl-theme","row","sliding");n(l,39,0,i,t.carouselOptions,t.likesvideos),n(l,42,0,t.likesvideos)},function(n,l){var t=l.component;n(l,8,0,t.safeSrc),n(l,12,0,null==t.video?null:t.video.title);var i=e["\u0275unv"](l,17,0,n(l,18,0,e["\u0275nov"](l,0),null==t.video?null:t.video.views));n(l,17,0,i)})}function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-single-video",[],null,null,null,P,M)),e["\u0275did"](1,114688,null,0,o,[c.a,i.a,b.c],null,null)],function(n,l){n(l,1,0)},null)}var w=e["\u0275ccf"]("app-single-video",o,x,{},{},[]),y=t("bjCr"),k=t("j13P"),j=t("OeD6");t.d(l,"SingleVideoModuleNgFactory",function(){return I});var I=e["\u0275cmf"](u,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,w]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](1073742336,c.s,c.s,[[2,c.y],[2,c.o]]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,y.OwlModule,y.OwlModule,[]),e["\u0275mpd"](1073742336,k.JwSocialButtonsModule,k.JwSocialButtonsModule,[]),e["\u0275mpd"](1073742336,j.a,j.a,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,c.m,function(){return[[{path:"",component:o}]]},[])])})}}]);