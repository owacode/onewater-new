import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurJourneyComponent } from './our-journey.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: OurJourneyComponent
    }
]

@NgModule({
  declarations: [OurJourneyComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class OurJourneyModule { }
