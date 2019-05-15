import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../../core/services/auth/token.storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  info: any;

  constructor(private token: TokenStorage, private router: Router) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.info = {
        token: this.token.getToken()
        /*username: this.token.getUsername(),
        authorities: this.token.getAuthorities()*/
      };
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

}
