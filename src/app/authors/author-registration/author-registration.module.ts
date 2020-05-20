import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthorRegistrationComponent } from './author-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/footer/footer.module';
import { HeaderModule } from 'src/app/header/header.module';

const routes: Route[]=[
    {
    path: '',
    component: AuthorRegistrationComponent
    }
]

@NgModule({
  declarations: [AuthorRegistrationComponent],
  exports:[
    AuthorRegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule
  ]
})
export class AuthorRegistrationModule { }
