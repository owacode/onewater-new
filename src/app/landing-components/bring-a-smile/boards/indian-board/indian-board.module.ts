import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndianBoardComponent } from './indian-board.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: IndianBoardComponent
    }
]

@NgModule({
  declarations: [IndianBoardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class IndianBoardModule { }
