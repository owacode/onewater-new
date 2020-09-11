import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwGuruComponent } from './ow-guru.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: OwGuruComponent
    }
]

@NgModule({
  declarations: [OwGuruComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    Ng2PageScrollModule
    ]
})

export class OwGuruModule { }
