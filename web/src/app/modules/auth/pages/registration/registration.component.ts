import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationModel } from '../../../../shared/models/registration.model';
import {invalid} from '@angular/compiler/src/render3/view/util';
import {AuthService} from '../../../../core/services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';

/*export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}*/


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  /*private password = new FormControl();
  private confirmPassword = new FormControl();
  public passwordsAreMatched = false;*/


  /*private registrationModel: RegistrationModel;
  private username: string;
  private email: string;
  private phone: string;
  private password: string;
  private confirmPassword: string;*/

  registrationForm: FormGroup;

  /*matcher = new MyErrorStateMatcher();*/

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.buildForm();
  }

  private buildForm(): void {
    this.registrationForm = this.formBuilder.group({
        fullName: ['', [Validators.required, Validators.pattern(/^[A-zА-я][A-zА-я_ ]*[A-zА-я]$/)]],
        username: ['', [Validators.required, Validators.pattern(/^[A-z0-9]*$/), Validators.minLength(3)]],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['']
      }/*, {validator: this.checkPasswords}*/
    );
  }

  /*checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }*/

  ngOnInit() {
  }

  passwordValidation() {
    /*alert(this.password.value);

    if (this.password.dirty && this.password.value !== '') {
      if (this.confirmPassword.dirty) {
        if (this.confirmPassword.value !== this.password.value) {
          this.passwordsAreMatched = false;
        } else {
          this.passwordsAreMatched = true;
        }
      }
    }*/

    /*if (this.password != null && this.password.va !== '') {
      if (this.confirmPassword !== this.password) {
        registrationForm.getControl('password');
      }
    }*/
  }

  /*onSubmit(registrationForm: NgForm) {
    if (registrationForm.valid) {
      this.username = registrationForm.controls.username.value;
      this.email = registrationForm.controls.email.value;
      this.phone = registrationForm.controls.phone.value;
      this.password = registrationForm.controls.password.value;
      this.confirmPassword = registrationForm.controls.confirmPassword.value;
      this.registrationModel = new RegistrationModel(this.username, this.email, this.phone, this.password, this.confirmPassword);
    }*/

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      this.authService.registration(userData);
    } else {
      alert('Form data is invalid!');
    }
  }

    /*console.log('Form: ' + registrationForm.controls.username.value);
    console.log('Model' + this.registrationModel.toString());*/
}

