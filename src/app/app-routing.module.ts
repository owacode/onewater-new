import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponentsComponent } from './landing-components/landing-components.component';
import { LandingPageComponent } from './landing-components/landing-page/landing-page.component';
import { VideoWebsiteComponent } from './video-website/video-website.component';
import { Authguard } from './Authguard/authguard';
import { OnewaterblogComponent } from './onewaterblog/onewaterblog.component';

const routes: Routes = [

  //-----------LANDING PAGES ROUTING---------------//

  {
    path: '',
    component: LandingComponentsComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'purpose',
        loadChildren: './landing-components/about/about.module#AboutModule'
      },
      {
        path: 'give',
        loadChildren: './landing-components/donation/donation.module#DonationModule'
      },
      {
        path: 'team',
        loadChildren: './landing-components/team/team.module#TeamModule'
      },
      {
        path: 'onewater-guru',
        loadChildren: './landing-components/ow-guru/ow-guru.module#OwGuruModule'
      },
      {
        path: 'learningacademy',
        loadChildren: './landing-components/ow-academy/ow-academy.module#OwAcademyModule'
      },
      
      {
        path: 'contact',
        loadChildren: './landing-components/contact/contact.module#ContactModule'
      },
      {
        path: 'privacy-policy',
        loadChildren: './landing-components/privacy-policy/privacy-policy.module#PrivacyPolicyModule'
      },
      {
        path: 'our-partners',
        loadChildren: './landing-components/our-partners/our-partners.module#OurPartnersModule'
      },
      {
        path: 'pricing',
        loadChildren: './landing-components/pricing/pricing.module#PricingModule'
      },
      {
        path: 'our-journey',
        loadChildren: './landing-components/our-journey/our-journey.module#OurJourneyModule'
      },

      //BRING A SMILE
      {
        path: 'owa-bas',
        loadChildren: './landing-components/bring-a-smile/bas-home/bas-home.module#BasHomeModule'
      },
      {
        path: 'owa-bas/boards/indian',
        loadChildren: './landing-components/bring-a-smile/boards/indian-board/indian-board.module#IndianBoardModule'
      },
      {
        path: 'owa-bas/boards/american',
        loadChildren: './landing-components/bring-a-smile/boards/american-board/american-board.module#AmericanBoardModule'
      },
      {
        path: 'owa-bas/boards/canadian',
        loadChildren: './landing-components/bring-a-smile/boards/canadian-board/canadian-board.module#CanadianBoardModule'
      },
      {
        path: 'owa-bas/chapters',
        loadChildren: './landing-components/bring-a-smile/chapters/all-chapters/all-chapters.module#AllChaptersModule'
      },
      {
        path: 'owa-bas/chapters/indore',
        loadChildren: './landing-components/bring-a-smile/chapters/indore-chapter/indore-chapter.module#IndoreChapterModule'
      },
      {
        path: 'owa-bas/chapters/hyderabad',
        loadChildren: './landing-components/bring-a-smile/chapters/hyderabad-chapter/hyderabad-chapter.module#HyderabadChapterModule'
      },
      {
        path: 'owa-bas/chapters/agartala',
        loadChildren: './landing-components/bring-a-smile/chapters/agartala-chapter/agartala-chapter.module#AgartalaChapterModule'
      },
      {
        path: 'owa-bas/chapters/lucknow',
        loadChildren: './landing-components/bring-a-smile/chapters/lucknow-chapter/lucknow-chapter.module#LucknowChapterModule'
      }
    ]
  },

  //-----------BLOG PAGES ROUTING---------------//

  {
    path: 'onewaterblog',
    component: OnewaterblogComponent,
    children: [
      {
        path: '',
        loadChildren: './onewaterblog/onewaterblog-home/onewaterblog-home.module#OnewaterblogHomeModule'
      },
      {
        path: 'category',
        loadChildren: './onewaterblog/onewaterblog-category/onewaterblog-category.module#OnewaterblogCategoryModule'
      },
      {
        path: 'blogpost',
        loadChildren: './onewaterblog/onewaterblog-blogpost/onewaterblog-blogpost.module#OnewaterblogBlogpostModule'
      },
      // {
      //   path: 'blogpost/:id',
      //   loadChildren: './blog-website/blog-post/blog-post.module#BlogPostModule',
      //   //canActivate: [Authguard]
      // },
      // {
      //   path: 'admin-blogpost/:id',
      //   loadChildren: './blog-website/admin-blogpost/admin-blogpost.module#AdminBlogpostModule',
      //   //canActivate: [Authguard]
      // },
      
      // {
      //   path: 'authorprofile/:id',
      //   loadChildren: './blog-website/author-page/author-page.module#AuthorPageModule'
      // },
     
      // {
      //   path: 'category',
      //   loadChildren: './blog-website/category/category.module#CategoryModule'
      // },
    
      // {
      //   path: 'author/login',
      //   loadChildren: './authors/author-login/author-login.module#AuthorLoginModule'
      // },
    ]
  },
  //-----------Author Registeration page -----------------//
  {
    path: 'onewaterblog/author/signup',
    loadChildren: './authors/author-registration/author-registration.module#AuthorRegistrationModule'
  },

  //-----------AUTHOR ADMIN PANEL---------------//

  {
    path: 'author',
    loadChildren: './authors/author-admin/author-admin.module#AuthorAdminModule'
  },

  //-----------VIDEO PAGES ROUTING---------------//
  {
    path: 'onewatertalks',
    component: VideoWebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: './video-website/home/home.module#HomeModule'
      },
      {
        path: 'singlevideo/:id',
        loadChildren: './video-website/single-video/single-video.module#SingleVideoModule'
      },
      {
        path: 'videos',
        loadChildren: './video-website/videos/videos.module#VideosModule'
      },
      {
        path: 'video-category',
        loadChildren: './video-website/video-category/video-category.module#VideoCategoryModule'
      }
    ]
  },
  //-----------Instructor pages -----------------//
  {
    path:'instructor',
    loadChildren: './instructors/instructor-page/instructor-page.module#InstructorPageModule'
  },
  {
    path:'instructor-form',
    loadChildren: './instructors/instructor-form/instructor-form.module#InstructorFormModule'
  },
  
  //-----------OTHER PAGES ROUTING---------------//
  {
    path: 'recover-password/:token',
    loadChildren: './recover-password/recover-password.module#RecoverPasswordModule'
  },
 /* {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    Authguard
  ],
})
export class AppRoutingModule { }
