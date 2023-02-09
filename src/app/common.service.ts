import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { errorData, nestedData } from './data';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  errMsg = { //  not using anywhere
    INVALID_CUSTOM_TOKEN: 'The custom token format is incorrect or the token is invalid for some reason (e.g. expired, invalid signature etc.)',
    CREDENTIAL_MISMATCH: 'The custom token corresponds to a different Firebase project.',
    TOKEN_EXPIRED: 'The users credential is no longer valid. The user must sign in again.',
    USER_DISABLED: 'The user account has been disabled by an administrator.',
    USER_NOT_FOUND: 'The user corresponding to the refresh token was not found. It is likely the user was deleted.',
    INVALID_REFRESH_TOKEN: 'An invalid refresh token is provided.',
    INVALID_GRANT_TYPE: 'the grant type specified is invalid.',
    MISSING_REFRESH_TOKEN: 'no refresh token provided.'
  } //  not using anywhere

  jsonapi = 'https://jsonplaceholder.typicode.com/todos'
  
  constructor(public httpClient: HttpClient) { }

  // nested-array page
    nestedArrayList(): Observable<nestedData[]>{
      return this.httpClient.get<nestedData[]>(environment.nestedApi)
    }
    
  // nested-array page end

  //revise-api-list show list from api
  showapi(): Observable<any> {
    let jsonBody = JSON.stringify({
    })
  
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type','application/json');
  
    return this.httpClient.get(this.jsonapi);
  }

  deleteapi(id: any) {

    let jsonBody = JSON.stringify({
        "id": id
    })

    const headers = {
      'Content-Type': 'application/json',
    }
    
    return this.httpClient.delete(this.jsonapi+"/"+ id, {headers: headers});

  }

dempapi() {
  return this.httpClient.get(environment.jsonapi);
}

// 'error-handling' page
errorHandlingPage(userid:any, pass:any): Observable<errorData[]> {
  
  let jsonBody = JSON.stringify({
    'username' : userid,
    'password' : pass,
  })

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  return this.httpClient.post<errorData[]>(environment.loginApi + '/auth/login', jsonBody, httpOptions)
}
// 'error-handling' page end

}
