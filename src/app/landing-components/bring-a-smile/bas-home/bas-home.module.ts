import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasHomeComponent } from './bas-home.component';
import { Route, RouterModule } from '@angular/router';

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
    CommonModule
    ]
})

export class BasHomeModule { }
