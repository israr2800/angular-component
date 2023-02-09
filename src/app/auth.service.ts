import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public http: HttpClient, public router: Router) { }


  login(param1: any, param2: any): Observable<any> {
    return this.http.post(apiUrl + "/auth/login", { "email": param1, "password": param2 })
  }

  register(param: any): Observable<any> {
    return this.http.post(apiUrl + "/auth/register", param)
  }

  // PRODUCT LIST FOR "auth-success" PAGE
  // let httpHeaders = new HttpHeaders ({'Content-type':'application/json'
  //   // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlzcmFyMjgwMEBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImlzcmFyIiwiaWF0IjoxNjI2MjU2OTk3LCJleHAiOjE2MjYyNjA1OTd9.YZZqxYLL7biJaVw2sc1cE6GpjADfb60KBUM-PApYWg8'
  //   // 'content-type':'application/json',
  //   // "Access-Control-Allow-Origin": "*",
  //   // "Access-Control-Allow-Credentials": "true",
  //   // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  //   // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  // }); 
  // let options = {headers:httpHeaders};
  //also an options  //const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer "+ JSON.parse(cookiesdata))};

  // GET TOKEN for TOKEN-INTERCEPTOR PAGE
  
    getToken() {
      return localStorage.getItem('token')
    }

  productList(): Observable<any> {

    // // <======// WIHOUT INTERCEPTOR ======>
    // let header = new HttpHeaders({
    //   'Authorization': 'Bearer '+this.getToken()
    // })
    // let options = {headers: header}

    // // <======// WIHOUT INTERCEPTOR ======>
    return this.http.get(apiUrl + "/products") // options as 'param' in get api
  }

  // for page "auth-success" login button show when token not available
  loggedIn() {
    return localStorage.getItem('token')
  }

  // LOGOUT FUNCTIONS FOR ALL PAGES
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['auth-login']);
  }

  // MAKE NEW ENTRY IN "PRODUCTS" API
  postInProduct(data: any) {
    return this.http.post(apiUrl + "/products", data)
  }

  // DELETE PRODUCT LIST 
  deleteList(id: any) {
    return this.http.delete(apiUrl +"/products/" + id)
  }

  // UPDATE IN PRODUCT LIST
  updateListData(id: any) {
    return this.http.get(apiUrl + "/products/" + id)
  }

  // SENDING UPDATE DATA TO API "PRODUCT LIST"
  updateDataEntry(id: any, data: any) {
    return this.http.put(apiUrl + "/products/" + id, data)
  }


}