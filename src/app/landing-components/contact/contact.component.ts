import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public http: HttpService, public modal: ModalFunctions) { }
  user;
  submitted:boolean=false;

  ngOnInit() {
    this.user= new FormGroup({
      name:new FormControl(null,{validators:[Validators.required]}),
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      subject:new FormControl(null,{validators:[Validators.required]}),
      message:new FormControl(null,{validators:[Validators.required]})
    });
  }

  contact() {
    this.submitted = true;
    //console.log(this.user.value);
    if(this.user.invalid) {
      //console.log("error in contact form filing");
      this.modal.hideBtnLoader();
      return;
    }
    this.http.postToBackend('/users/contact',this.user.value)
    .then((res: any)=> {
      //console.log(result);
      this.modal.hideBtnLoader();
     // alert(result.msg)
     this.modal.openModal("#successModal");
     this.user.reset();
     this.submitted = false;
    })
  }

}
