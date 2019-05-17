import { Component, OnInit } from '@angular/core';
import {TokenStorage} from '../../../core/authentication/token.storage';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean;
  username: string;

  constructor(private tokenStorage: TokenStorage, private dataSharingService: DataSharingService) {
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });

    this.dataSharingService.username.subscribe(value => {
      this.username = value;
    });
  }

  ngOnInit() {
    /*if (this.tokenStorage.getToken()) {
      this.info = {
        username: this.tokenStorage.getUsername()
        // token: this.tokenStorage.getToken(),
        // username: this.tokenStorage.getUsername(),
        // authorities: this.tokenStorage.getAuthorities()
      };
      this.isLoggedIn = true;
    } else {
      this.info = null;
      this.isLoggedIn = false;
    }*/
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }


}
