import { Component } from '@angular/core';
import {TokenStorage} from './core/authentication/token.storage';
import {DataSharingService} from './shared/services/data-sharing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private tokenStorage: TokenStorage) {
    this.tokenStorage.refreshDataSharing();
  }

}
