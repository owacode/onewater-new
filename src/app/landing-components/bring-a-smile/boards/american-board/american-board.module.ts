import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmericanBoardComponent } from './american-board.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: AmericanBoardComponent
    }
]

@NgModule({
  declarations: [AmericanBoardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class AmericanBoardModule { }
