(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{D8K2:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){function l(l,n){this.route=l,this.http=n,this.showSubCat=!1,this.categories=[{img:"assets/img/icons/water.svg",name:"Water",subcat:[{subname:"Distribution System",sname:"distribution",subimg:"assets/img/icons/distribution.svg"},{subname:"Water Conservation",sname:"conservation",subimg:"assets/img/icons/conserve.svg"},{subname:"Drinking Water Quality",sname:"drinking",subimg:"assets/img/icons/drink.svg"},{subname:"Water Treatment & Operations",sname:"watertreatment",subimg:"assets/img/icons/treatment.svg"},{subname:"Desalination",sname:"desalination",subimg:"assets/img/icons/desalination.svg"}]},{img:"assets/img/icons/waste-water.svg",name:"Waste Water",subcat:[{subname:"Biosolids",sname:"biosolids",subimg:"assets/img/icons/lab.svg"},{subname:"Collection Systems",sname:"collection",subimg:"assets/img/icons/water-tank.svg"},{subname:"Water Reuse and Resource Recovery",sname:"reuse",subimg:"assets/img/icons/reuse.svg"},{subname:"Odour and Corrosion Management",sname:"odor",subimg:"assets/img/icons/smell.svg"},{subname:"Wastewater Treatment & /Operations",sname:"wastewatertreatment",subimg:"assets/img/icons/sewage.svg"}]},{img:"assets/img/icons/storm.svg",name:"Storm Water",subcat:[{subname:"Watershed",sname:"watershed",subimg:"assets/img/icons/lake.svg"},{subname:"Hydrology",sname:"hydrology",subimg:"assets/img/icons/molecule.svg"}]},{img:"assets/img/icons/research.svg",name:"Innovation & Research",subcat:[{subname:"Water Science & Research",sname:"waterscience",subimg:"assets/img/icons/test.svg"},{subname:"Students",sname:"students",subimg:"assets/img/icons/graduate.svg"},{subname:"Young Professionals",sname:"youngpros",subimg:"assets/img/icons/scientist.svg"}]},{img:"assets/img/icons/sustainable.svg",name:"Sustainable Development",subcat:[{subname:"Climate Change",sname:"climate",subimg:"assets/img/icons/climate.svg"},{subname:"Resiliency",sname:"resiliency",subimg:"assets/img/icons/resilent.svg"},{subname:"Energy",sname:"energy",subimg:"assets/img/icons/energy.svg"},{subname:"Regional Actvities/ Case Studies",sname:"reg",subimg:"assets/img/icons/case.svg"}]},{img:"assets/img/icons/finance.svg",name:"Management & Finance",subcat:[{subname:"Workforce Management",sname:"workforce",subimg:"assets/img/icons/team.svg"},{subname:"Asset Management",sname:"asset",subimg:"assets/img/icons/management.svg"},{subname:"Utility Management",sname:"util",subimg:"assets/img/icons/settings.svg"},{subname:"Financing",sname:"finance",subimg:"assets/img/icons/profits.svg"},{subname:"Construction Management",sname:"cons",subimg:"assets/img/icons/mechanic.svg"},{subname:"Leadership",sname:"leader",subimg:"assets/img/icons/leadership.svg"}]},{img:"assets/img/icons/regulatory.svg",name:"Legislative & Regulatory",subcat:[{subname:"Goverment Affairs",sname:"govt",subimg:"assets/img/icons/government.svg"},{subname:"Safety and Security",sname:"safety",subimg:"assets/img/icons/padlock.svg"}]}]}return l.prototype.ngOnInit=function(){var l=this;this.getmostlikedblogs(),this.route.queryParams.subscribe(function(n){l.category=n.category,l.tempcate=n.category,l.subcategory=n.subcategory,l.sname=n.sname;for(var t=0;t<l.categories.length;t++)l.categories[t].name==l.category&&(l.currentCategory=l.categories[t].subcat);l.http.get("https://onewater-blogapi.herokuapp.com/category/"+l.sname).subscribe(function(n){l.blogs=n.result,l.singleblog=l.blogs[0],l.getauthor(l.singleblog.author_id)})})},l.prototype.getauthor=function(l){var n=this;this.http.get("https://onewater-blogapi.herokuapp.com/approvedauthor/"+l).subscribe(function(l){n.author=l.result[0]})},l.prototype.getmostlikedblogs=function(){var l=this;this.http.get("https://onewater-blogapi.herokuapp.com/mostlikedblogs").subscribe(function(n){l.mostlikedblogs=n.result.slice(0,3)})},l}(),o=function(){return function(){}}(),a=t("pMnS"),i=t("ZYCi"),s=t("Ip0R"),r=t("m5X7"),c=t("t/Na"),g=e["\u0275crt"]({encapsulation:0,styles:[[".category-wrap[_ngcontent-%COMP%]{padding-top:15vh;background:#fff}.outer-card[_ngcontent-%COMP%]   .blog-meta-data[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{text-align:left}.category-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:.5rem auto;font-weight:700;letter-spacing:-.15rem;border-bottom:1px solid #ccc}.category-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#777;font-weight:600;letter-spacing:-.06rem}.category-box[_ngcontent-%COMP%]{height:auto;padding:1rem 0;margin:0}.category-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:left;margin:0}.big-post[_ngcontent-%COMP%]{margin:.2rem auto 3rem}.big-post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:1rem auto .2rem;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.big-post[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]{margin:.2rem auto}.big-post[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1rem auto 1.2rem}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]{font-size:14px}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:100%;border:1px solid #0e77e1;padding:2px;display:inline-block}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-data[_ngcontent-%COMP%]{display:inline-block;padding-left:12px;padding-top:1rem;vertical-align:top}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-author[_ngcontent-%COMP%]{color:#000;font-weight:700}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-date[_ngcontent-%COMP%]{color:rgba(0,0,0,.477);font-weight:600}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-read[_ngcontent-%COMP%]{color:rgba(0,0,0,.477);display:block;font-weight:600}.latest-blogs[_ngcontent-%COMP%]{padding:2rem 0}.latest-blogs[_ngcontent-%COMP%]   .outer-card[_ngcontent-%COMP%]{margin:2rem auto}.latest-blogs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.outer-card[_ngcontent-%COMP%]{max-width:100%!important;margin:1rem auto}.latest-card[_ngcontent-%COMP%]{background:#fff;position:relative;z-index:10;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);border-radius:8px;overflow:hidden;padding:.5rem}.latest-card[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]{padding:1rem 1rem 1rem .2rem}.latest-card[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0}.popular-card[_ngcontent-%COMP%]{margin:1rem auto;border-radius:10px;overflow:hidden;background:#fff;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);position:relative;min-height:120px}.popular-card[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:35%}.popular-card[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;height:100%;padding:.5rem 0 .5rem .5rem}.popular-card[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]{position:absolute;top:0;right:0;height:100%;width:65%;padding:.3rem 1rem}.popular-card[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;letter-spacing:-.8px;margin:.5rem}.popular-card[_ngcontent-%COMP%]   .blog-meta-data[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;width:87%;right:1rem}.popular-card[_ngcontent-%COMP%]   .blog-meta-data[_ngcontent-%COMP%]   .read[_ngcontent-%COMP%]{margin-top:3px}.categories[_ngcontent-%COMP%]{padding:2rem 0}@media screen and (max-width:768px){.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:84px;height:84px}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-author[_ngcontent-%COMP%]{font-size:1.3rem}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-date[_ngcontent-%COMP%], .big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-read[_ngcontent-%COMP%]{font-size:.95rem}.category-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}}@media screen and (max-width:520px){.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;height:70px}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-author[_ngcontent-%COMP%]{font-size:1rem}.big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-date[_ngcontent-%COMP%], .big-post[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .meta-read[_ngcontent-%COMP%]{font-size:.9rem}.big-post[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.6rem;text-align:left}.latest-card[_ngcontent-%COMP%]{padding:.5rem}.latest-card[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%], .latest-card[_ngcontent-%COMP%]   .col-9[_ngcontent-%COMP%]{max-width:100%!important;flex:0 0 100%}.latest-card[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}h2[_ngcontent-%COMP%]{text-align:center}.two-card-blog[_ngcontent-%COMP%]   .two-card[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700}}"]],data:{}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,18,"div",[["class","article-meta"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](2,671744,null,0,i.r,[i.o,i.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](3,1),(l()(),e["\u0275eld"](4,0,null,null,0,"img",[["alt","Author"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,13,"div",[["class","meta-data"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,6,"span",[["class","meta-author"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["By "])),(l()(),e["\u0275eld"](8,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,9).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](9,671744,null,0,i.r,[i.o,i.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](10,2),(l()(),e["\u0275ted"](11,null,["",""])),e["\u0275ppd"](12,1),(l()(),e["\u0275eld"](13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,2,"span",[["class","meta-date"]],null,null,null,null,null)),(l()(),e["\u0275ted"](15,null,["",""])),e["\u0275ppd"](16,2),(l()(),e["\u0275eld"](17,0,null,null,1,"span",[["class","meta-read"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["7 mins read"]))],function(l,n){var t=n.component,e=l(n,3,0,"/onewaterblog/authorprofile");l(n,2,0,e);var u=l(n,10,0,"/onewaterblog/authorprofile/",null==t.author?null:t.author._id);l(n,9,0,u)},function(l,n){var t=n.component;l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href),l(n,4,0,e["\u0275inlineInterpolate"](1,"",null==t.author?null:t.author.image,"")),l(n,8,0,e["\u0275nov"](n,9).target,e["\u0275nov"](n,9).href);var u=e["\u0275unv"](n,11,0,l(n,12,0,e["\u0275nov"](n.parent.parent,0),null==t.author?null:t.author.name));l(n,11,0,u);var o=e["\u0275unv"](n,15,0,l(n,16,0,e["\u0275nov"](n.parent.parent,1),null==t.singleblog?null:t.singleblog.date_approved,"MMMM d, y"));l(n,15,0,o)})}function d(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","big-post"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](2,671744,null,0,i.r,[i.o,i.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](3,1),(l()(),e["\u0275eld"](4,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,7,"div",[["class","blog-caption"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](7,671744,null,0,i.r,[i.o,i.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](8,2),(l()(),e["\u0275eld"](9,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,[" "," "])),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](12,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component,e=l(n,3,0,"/onewaterblog/blogpost");l(n,2,0,e);var u=l(n,8,0,"/onewaterblog/blogpost",null==t.singleblog?null:t.singleblog._id);l(n,7,0,u),l(n,12,0,t.author)},function(l,n){var t=n.component;l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href),l(n,4,0,e["\u0275inlineInterpolate"](1,"",null==t.singleblog?null:t.singleblog.image,"")),l(n,6,0,e["\u0275nov"](n,7).target,e["\u0275nov"](n,7).href),l(n,10,0,null==t.singleblog?null:t.singleblog.title)})}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","no-data"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/no-post.svg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,[" No blogs from "," to display. "])),e["\u0275ppd"](4,1)],null,function(l,n){var t=n.component,u=e["\u0275unv"](n,3,0,l(n,4,0,e["\u0275nov"](n.parent,0),t.subcategory));l(n,3,0,u)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","likes"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-heart"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[""," likes "]))],null,function(l,n){l(n,2,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.likecount)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,20,"div",[["class","outer-card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"div",[["class","outer-overlay"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,18,"div",[["class","latest-card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,14,"div",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,13,"div",[["class","blog-caption"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,9).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](9,671744,null,0,i.r,[i.o,i.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](10,2),(l()(),e["\u0275eld"](11,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,["",""])),(l()(),e["\u0275eld"](13,0,null,null,7,"div",[["class","blog-meta-data"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,2,"div",[["class","author"]],null,null,null,null,null)),(l()(),e["\u0275ted"](15,null,[" By "," "])),e["\u0275ppd"](16,1),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](18,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](19,0,null,null,1,"div",[["class","read"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" 7 mins read "]))],function(l,n){var t=l(n,10,0,"/onewaterblog/blogpost/",n.context.$implicit._id);l(n,9,0,t),l(n,18,0,null==n.context.$implicit?null:n.context.$implicit.likecount)},function(l,n){var t=n.component;l(n,5,0,e["\u0275inlineInterpolate"](1,"",null==n.context.$implicit?null:n.context.$implicit.image,"")),l(n,8,0,e["\u0275nov"](n,9).target,e["\u0275nov"](n,9).href),l(n,12,0,null==n.context.$implicit?null:n.context.$implicit.title);var u=e["\u0275unv"](n,15,0,l(n,16,0,e["\u0275nov"](n.parent,0),null==t.author?null:t.author.name));l(n,15,0,u)})}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","likes"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-heart"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[""," likes "]))],null,function(l,n){l(n,2,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.likecount)})}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,15,"div",[["class","col-lg-12 col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,14,"div",[["class","popular-card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","blog-img"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,11,"div",[["class","blog-caption"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,6).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](6,671744,null,0,i.r,[i.o,i.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](7,2),(l()(),e["\u0275eld"](8,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),e["\u0275ppd"](10,2),(l()(),e["\u0275eld"](11,0,null,null,4,"div",[["class","blog-meta-data"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](13,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](14,0,null,null,1,"div",[["class","read"]],null,null,null,null,null)),(l()(),e["\u0275ted"](15,null,[" "," mins read "]))],function(l,n){var t=l(n,7,0,"/onewaterblog/blogpost/",n.context.$implicit._id);l(n,6,0,t),l(n,13,0,null==n.context.$implicit?null:n.context.$implicit.likecount)},function(l,n){l(n,3,0,e["\u0275inlineInterpolate"](1,"",null==n.context.$implicit?null:n.context.$implicit.image,"")),l(n,5,0,e["\u0275nov"](n,6).target,e["\u0275nov"](n,6).href);var t=e["\u0275unv"](n,9,0,l(n,10,0,e["\u0275nov"](n.parent.parent,2),null==n.context.$implicit?null:n.context.$implicit.title,30));l(n,9,0,t),l(n,15,0,null==n.context.$implicit?null:n.context.$implicit.read_time)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","popular-blogs"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Popular blogs from other categories"])),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](5,278528,null,0,s.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.mostlikedblogs)},null)}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](1,671744,null,0,i.r,[i.o,i.a,s.LocationStrategy],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e["\u0275pod"](2,{category:0,subcategory:1,sname:2}),e["\u0275pad"](3,1),(l()(),e["\u0275eld"](4,0,null,null,6,"div",[["class","category-box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,5,"div",[["class","row align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,2,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""]))],function(l,n){var t=l(n,2,0,n.component.tempcate,n.parent.context.$implicit.subname,n.parent.context.$implicit.sname),e=l(n,3,0,"/onewaterblog/category");l(n,1,0,t,e)},function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href),l(n,7,0,n.parent.context.$implicit.subimg),l(n,10,0,n.parent.context.$implicit.subname)})}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](2,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.context.$implicit.subname!=n.component.subcategory)},null)}function _(l){return e["\u0275vid"](0,[e["\u0275pid"](0,s.TitleCasePipe,[]),e["\u0275pid"](0,s.DatePipe,[e.LOCALE_ID]),e["\u0275pid"](0,r.a,[]),(l()(),e["\u0275eld"](3,0,null,null,26,"div",[["class","category-wrap"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,25,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,4,"div",[["class","category-head"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,[" "," "])),(l()(),e["\u0275eld"](8,0,null,null,1,"h2",[["class","mt-2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,[" from "," "])),(l()(),e["\u0275eld"](10,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,9,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,d)),e["\u0275did"](13,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](14,0,null,null,6,"div",[["class","latest-blogs mt-60"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](16,null,["All Blogs from ",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](18,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](20,278528,null,0,s.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](21,0,null,null,8,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](23,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](24,0,null,null,5,"div",[["class","categories mt-60"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](26,null,["More from ",""])),(l()(),e["\u0275eld"](27,0,null,null,2,"div",[["class","categories-card mt-4"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](29,278528,null,0,s.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,13,0,t.singleblog),l(n,18,0,!(null!=t.blogs&&t.blogs.length)),l(n,20,0,t.blogs),l(n,23,0,null==t.mostlikedblogs?null:t.mostlikedblogs.length),l(n,29,0,t.currentCategory)},function(l,n){var t=n.component;l(n,7,0,t.subcategory),l(n,9,0,t.category),l(n,16,0,t.subcategory),l(n,26,0,t.category)})}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-category",[],null,null,null,_,g)),e["\u0275did"](1,114688,null,0,u,[i.a,c.c],null,null)],function(l,n){l(n,1,0)},null)}var y=e["\u0275ccf"]("app-category",u,P,{},{},[]),x=t("OeD6");t.d(n,"CategoryModuleNgFactory",function(){return k});var k=e["\u0275cmf"](o,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,y]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[e.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](1073742336,i.s,i.s,[[2,i.y],[2,i.o]]),e["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),e["\u0275mpd"](1073742336,x.a,x.a,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,i.m,function(){return[[{path:"",component:u}]]},[])])})}}]);