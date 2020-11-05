import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewaterblogHomeComponent } from './onewaterblog-home.component';
import { Route, RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

const routes: Route[]=[
    {
    path: '',
    component: OnewaterblogHomeComponent
    }
]

@NgModule({
  declarations: [OnewaterblogHomeComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CommonPipesModule,
    OwlModule
    ]
})

export class OnewaterblogHomeModule { }
