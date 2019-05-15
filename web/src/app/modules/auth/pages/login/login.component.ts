import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {UserTestService} from '../../../../core/services/user-test.service';
import {UserTest} from '../../../../shared/models/user-test';
import {Router} from '@angular/router';
import {AuthLoginInfo} from '../../../../core/services/auth/login-info';
import {TokenStorage} from '../../../../core/services/auth/token.storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // users: UserTest[];
  // user: UserTest = new UserTest();

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private token: TokenStorage,
              private router: Router) {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
  }

  ngOnInit() {
    /*if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }*/

    /*this.userTestService.getUsers().subscribe(data => {
      this.users = data;
    });*/
  }

  onSubmitTest() {
    /*console.log(this.user);
    this.userTestService.saveUser(this.user).subscribe(result => this.gotoUserList());*/
  }

  /*gotoUserList() {
    this.router.navigate(['/auth/registration']);
  }*/

  reloadPage() {
    window.location.reload();
  }

  login() {
    if (this.loginForm.valid) {

      // console.log(this.form);

      const formControls = this.loginForm.controls;

      this.loginInfo = new AuthLoginInfo(
        formControls.username.value,
        formControls.password.value);

      this.authService.attemptAuth(this.loginInfo).subscribe(

        data => {
          this.token.saveToken(data.token);
          this.router.navigate(['/home/profile']);
        }


        /*data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.authorities);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getAuthorities();
          this.router.navigate(['/home/profile']);
          // this.reloadPage();
        }*/,
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );


      /*const formControls = this.loginForm.controls;
      this.authService.login(formControls.username.value, formControls.password.value)
        .subscribe(
          () => {
            console.log('User is logged in');
            this.router.navigateByUrl('/profile/data');
          }
        );*/
      /*
            this.authService.login(this.loginForm.value)
              .subscribe(
                () => {
                  console.log('User is logged in');
                  this.router.navigateByUrl('/profile/data');
                }
              );*/
    }
  }

  /*login() {
    if (this.loginForm.valid) {

      // console.log(this.form);

      const formControls = this.loginForm.controls;

      this.loginInfo = new AuthLoginInfo(
        formControls.username.value,
        formControls.password.value);

      this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.authorities);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getAuthorities();
          this.router.navigate(['/home/profile']);
          // this.reloadPage();
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );


      /!*const formControls = this.loginForm.controls;
      this.authService.login(formControls.username.value, formControls.password.value)
        .subscribe(
          () => {
            console.log('User is logged in');
            this.router.navigateByUrl('/profile/data');
          }
        );*!/
/!*
      this.authService.login(this.loginForm.value)
        .subscribe(
          () => {
            console.log('User is logged in');
            this.router.navigateByUrl('/profile/data');
          }
        );*!/
    }
  }*/

}
