import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HyderabadChapterComponent } from './hyderabad-chapter.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: HyderabadChapterComponent
    }
]

@NgModule({
  declarations: [HyderabadChapterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class HyderabadChapterModule { }
