import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    
      return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
            } else {
                // server-side error
                errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
            }

            if(error.status == 400) {
              alert('Invalid User/Pass');
            }
            else if (error.status === 404) {
              alert("Url Not Found")
            }
            else if (error.status === 401) {
              alert("UnAuthorized Access");
            }

            console.log("err Occ: ", errorMessage);
            return throwError(() => errorMessage);

        })
      )

  }
}
