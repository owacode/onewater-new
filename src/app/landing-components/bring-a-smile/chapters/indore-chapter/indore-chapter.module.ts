import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndoreChapterComponent } from './indore-chapter.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: IndoreChapterComponent
    }
]

@NgModule({
  declarations: [IndoreChapterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class IndoreChapterModule { }
