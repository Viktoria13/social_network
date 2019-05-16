import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorage} from '../authentication/token.storage';
import {tap} from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorage, private router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (this.token.getToken() != null) {
      req = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, this.token.getToken())
      });
    }
    return next.handle(req)
      .pipe(
        tap(
          evt => {
            if (evt instanceof HttpResponse) {
              console.log('---> status:', evt.status);
              console.log('---> filter:', req.params.get('filter'));
            }
          }
        )
      );
  }
}

