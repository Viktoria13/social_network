import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {Router} from '@angular/router';
import {AuthLoginInfo} from '../../../../core/authentication/login-info';
import {TokenStorage} from '../../../../core/authentication/token.storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  headers: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenStorage: TokenStorage,
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
    if (this.tokenStorage.getToken()) {
      this.router.navigate(['/home/profile']);
    }
    // alert(this.tokenStorage.getToken());
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

  getInfo() {
    this.authService.getInfo().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  login() {
    if (this.loginForm.valid) {

      // console.log(this.form);

      const formControls = this.loginForm.controls;

      this.loginInfo = new AuthLoginInfo(
        formControls.username.value,
        formControls.password.value);

      this.authService.attemptAuth(this.loginInfo).subscribe(

        resp => {
          // display its headers
          /*const keys = resp.headers.keys();
          this.headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          console.log(this.headers);*/
          this.tokenStorage.saveToken(resp.headers.get('Authorization'));
          this.tokenStorage.saveUsername(resp.headers.get('Username'));
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
