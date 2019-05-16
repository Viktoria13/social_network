import { Component, OnInit } from '@angular/core';
import {TokenStorage} from '../../../core/authentication/token.storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  info: any;

  constructor(private token: TokenStorage) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.info = {
        username: this.token.getToken()
        // token: this.tokenStorage.getToken(),
        // username: this.tokenStorage.getUsername(),
        // authorities: this.tokenStorage.getAuthorities()
      };
      this.isLoggedIn = true;
    }
  }

}
