import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucknowChapterComponent } from './lucknow-chapter.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: LucknowChapterComponent
    }
]

@NgModule({
  declarations: [LucknowChapterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})

export class LucknowChapterModule { }
