import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: PricingComponent
    }
]

@NgModule({
  declarations: [PricingComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})

export class PricingModule { }
