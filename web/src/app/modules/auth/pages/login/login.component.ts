import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth.service';
import {UserTestService} from '../../../../core/services/user-test.service';
import {UserTest} from '../../../../shared/models/user-test';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  users: UserTest[];
  user: UserTest = new UserTest();

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userTestService: UserTestService, private router: Router) {
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
    this.userTestService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onSubmitTest() {
    console.log(this.user);
    this.userTestService.saveUser(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/auth/registration']);
  }

  onSubmit() {
    console.log(this.user);
    // this.userTestService.saveUser(this.user);
  }

}
