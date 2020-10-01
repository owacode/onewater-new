import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanadianBoardComponent } from './canadian-board.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CanadianBoardComponent
    }
]

@NgModule({
  declarations: [CanadianBoardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class CanadianBoardModule { }
