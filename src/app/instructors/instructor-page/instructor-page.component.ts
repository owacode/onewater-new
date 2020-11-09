import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.scss']
})
export class InstructorPageComponent implements OnInit {
  toRender = 'signup';
  form:FormGroup;
  public submitted: Boolean = false;
  constructor(public modal: ModalFunctions, public http: HttpService) { }

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
  }

  register() {
    this.modal.showBtnLoader()
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
