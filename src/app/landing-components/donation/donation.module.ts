import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DonationComponent } from './donation.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { NgxPayPalModule } from 'ngx-paypal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Route[]=[
    {
    path: '',
    component: DonationComponent
    }
]

@NgModule({
  declarations: [DonationComponent],
  exports:[
    DonationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    Ng2PageScrollModule,
    NgxPayPalModule,
    FormsModule,
    ReactiveFormsModule
    ]
})
export class DonationModule { }
