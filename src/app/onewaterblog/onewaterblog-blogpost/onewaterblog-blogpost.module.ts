import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewaterblogBlogpostComponent } from './onewaterblog-blogpost.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';
import { OwlModule } from 'ngx-owl-carousel';

const routes: Route[]=[
    {
    path: '',
    component: OnewaterblogBlogpostComponent
    }
]

@NgModule({
  declarations: [OnewaterblogBlogpostComponent],
  imports: [
    CommonPipesModule,
    OwlModule,
    RouterModule.forChild(routes),
    CommonModule,
    ]
})

export class OnewaterblogBlogpostModule { }
