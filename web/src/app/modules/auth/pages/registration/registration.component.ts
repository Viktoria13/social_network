import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegistrationModel} from '../../../../shared/models/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationModel: RegistrationModel = new RegistrationModel();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(registrationForm: NgForm) {

    console.log('Form: ' + registrationForm.controls.username.value);
    console.log('Model' + this.registrationModel.toString());
  }

}
