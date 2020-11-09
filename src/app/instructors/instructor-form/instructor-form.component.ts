import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { InstructorService } from '../../instructor.service';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.scss']
})
export class InstructorFormComponent implements OnInit {
public submitted: Boolean = false;
  form:FormGroup;
  

  constructor(public http: HttpService, public modal: ModalFunctions, public auth: InstructorService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, {validators:[Validators.required]}),
      lastName: new FormControl(null, {validators:[Validators.required]}),
      email: new FormControl(null, {validators:[Validators.required,Validators.email]}),
      organizationName: new FormControl(null, {validators:[Validators.required]}),
      phone: new FormControl(null),
      courseCategory: new FormControl('',{validators:[Validators.required]}),
      courseType: new FormControl(null, {validators:[Validators.required]}),
      courseTitle: new FormControl(null, {validators:[Validators.required]}),
      courseDescription: new FormControl(null, {validators:[Validators.required]})
    })

    Feather.replace();
  }

  register() {
    console.log(this.form.value)
    this.submitted = true;
    if(this.form.invalid){
      this.modal.hideBtnLoader();
      return;
    }
    //console.log(this.form.value,'after reset');
    this.http.postToBackend('/users/register/instructor', this.form.value)
    .then((res: any)=> {
      this.modal.hideBtnLoader();
      this.modal.openModal('#detailsSubmitted');
      this.form.reset();
      this.submitted = false;
    })
  }

}
