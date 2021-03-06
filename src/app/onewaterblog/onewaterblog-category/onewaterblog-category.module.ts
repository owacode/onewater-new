import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewaterblogCategoryComponent } from './onewaterblog-category.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

const routes: Route[]=[
    {
    path: '',
    component: OnewaterblogCategoryComponent
    }
]

@NgModule({
  declarations: [OnewaterblogCategoryComponent],
  imports: [
    CommonPipesModule,
    RouterModule.forChild(routes),
    CommonModule,
    ]
})

export class OnewaterblogCategoryModule { }
