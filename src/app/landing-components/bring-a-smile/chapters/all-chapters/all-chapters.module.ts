import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllChaptersComponent } from './all-chapters.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: AllChaptersComponent
    }
]

@NgModule({
  declarations: [AllChaptersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})

export class AllChaptersModule { }
