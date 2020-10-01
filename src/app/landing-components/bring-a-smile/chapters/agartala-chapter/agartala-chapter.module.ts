import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgartalaChapterComponent } from './agartala-chapter.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: AgartalaChapterComponent
    }
]

@NgModule({
  declarations: [AgartalaChapterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})

export class AgartalaChapterModule { }
