import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasHomeComponent } from './bas-home.component';
import { Route, RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { LightboxModule } from 'ngx-lightbox';

const routes: Route[]=[
    {
    path: '',
    component: BasHomeComponent
    }
]

@NgModule({
  declarations: [BasHomeComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LightboxModule,
    OwlModule
    ]
})

export class BasHomeModule { }
