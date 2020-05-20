import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { LandingComponentsComponent } from './landing-components/landing-components.component';
import { LandingPageComponent } from './landing-components/landing-page/landing-page.component';
import { BlogWebsiteComponent } from './blog-website/blog-website.component';
import { VideoWebsiteComponent } from './video-website/video-website.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    AppComponent,LandingComponentsComponent, LandingPageComponent, BlogWebsiteComponent, VideoWebsiteComponent
  ],

  exports:[],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxPayPalModule,
    HeaderModule,
    FooterModule,
    CKEditorModule,
    EditorModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
