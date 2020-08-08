import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponentsComponent } from './landing-components/landing-components.component';
import { LandingPageComponent } from './landing-components/landing-page/landing-page.component';
import { BlogWebsiteComponent } from './blog-website/blog-website.component';
import { VideoWebsiteComponent } from './video-website/video-website.component';
import { Authguard } from './Authguard/authguard';

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
    ]
  },

  //-----------BLOG PAGES ROUTING---------------//

  {
    path: 'onewaterblog',
    component: BlogWebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: './blog-website/blog/blog.module#BlogModule'
      },
      {
        path: 'blogpost/:id',
        loadChildren: './blog-website/blog-post/blog-post.module#BlogPostModule',
        //canActivate: [Authguard]
      },
      {
        path: 'admin-blogpost/:id',
        loadChildren: './blog-website/admin-blogpost/admin-blogpost.module#AdminBlogpostModule',
        //canActivate: [Authguard]
      },
      
      {
        path: 'authorprofile/:id',
        loadChildren: './blog-website/author-page/author-page.module#AuthorPageModule'
      },
     
      {
        path: 'category',
        loadChildren: './blog-website/category/category.module#CategoryModule'
      },
    
      {
        path: 'author/login',
        loadChildren: './authors/author-login/author-login.module#AuthorLoginModule'
      },
      
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
  //-----------Instructor Form page -----------------//
  {
    path:'instructor-form',
    loadChildren: './instructors/instructor-form/instructor-form.module#InstructorFormModule'
  },
  
  //-----------OTHER PAGES ROUTING---------------//
  {
    path: 'recover-password/:token',
    loadChildren: './recover-password/recover-password.module#RecoverPasswordModule'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    Authguard
  ],
})
export class AppRoutingModule { }
