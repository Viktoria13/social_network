import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../../../core/services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private confirmPassword: string;
  registrationForm: FormGroup;

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

  ngOnInit() {
  }

  onKeyConfirmPassword(event: any) {
    this.confirmPassword = event.target.value;
    if (this.registrationForm.controls.password.value !== this.confirmPassword) {
      this.registrationForm.controls.confirmPassword.setErrors({incorrect: true});
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      this.authService.registration(userData);
    } else {
      alert('Form data is invalid!');
    }
  }

}

