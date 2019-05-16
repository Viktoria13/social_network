import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {SignUpInfo} from '../../../../core/authentication/signup-info';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private confirmPassword: string;
  registrationForm: FormGroup;

  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
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

      const formControls = this.registrationForm.controls;

      this.signupInfo = new SignUpInfo(
        formControls.fullName.value,
        formControls.username.value,
        formControls.email.value,
        formControls.password.value);

      this.authService.signUp(this.signupInfo).subscribe(
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/auth/login']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
      );

      /*const userData = this.registrationForm.value;
      this.authService.registration(userData);*/
    } else {
      alert('Form data is invalid!');
    }
  }

}

