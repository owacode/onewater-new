import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PostBlogComponent } from './post-blog.component';
// import {QuillModule} from "ngx-quill";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { EditorModule } from '@tinymce/tinymce-angular';

const routes: Route[]=[
    {
    path: '',
    component: PostBlogComponent
    }
]

@NgModule({
  declarations: [PostBlogComponent],
  exports:[
    PostBlogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    // QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    EditorModule
  ]
})
export class PostBlogModule { }
