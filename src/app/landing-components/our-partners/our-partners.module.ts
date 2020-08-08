import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurPartnersComponent } from './our-partners.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: OurPartnersComponent
    }
]

@NgModule({
  declarations: [OurPartnersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})

export class OurPartnersModule { }
