import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewaterblogCategoryComponent } from './onewaterblog-category.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[]=[
    {
    path: '',
    component: OnewaterblogCategoryComponent
    }
]

@NgModule({
  declarations: [OnewaterblogCategoryComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})

export class OnewaterblogCategoryModule { }
