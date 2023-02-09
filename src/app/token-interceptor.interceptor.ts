import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()

export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService, public router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let tokenData = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })

    return next.handle(tokenData).pipe(
      catchError((error) =>{
        if(error instanceof HttpErrorResponse) {
          if(error.status === 401) {
            alert('Token not valid or expired');
            this.router.navigateByUrl('/auth-login');
          }
        }
        return throwError(()=>error);
      })
    );

  }
}
