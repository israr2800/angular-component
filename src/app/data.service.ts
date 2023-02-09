import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiList } from './data';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  

  api = 'http://localhost:3000/testapi'
  rootUrl = 'http://localhost:3000'
  testapi = 'https://jsonplaceholder.typicode.com/todos'


  constructor(public http: HttpClient) {}

  // Post Data to API for page "reactive-form"
    reactiveForm(param: any) {
      return this.http.post(this.api, param)
    }

  // Get Data From API for page "show-api-list"
    showlist():Observable<apiList[]> {
      return this.http.get<apiList[]>(this.testapi)
    }

  // Delete Data From API for page "show-api-list"

  deleteapiData(id: any) {
    return this.http.delete(this.api + "/" + id)
  }

  // Update Data in API for page "udpate-data"
  
    // 1. first get data API to show edited data in log and form
    getdataEdit(param: any) {
      return this.http.get(this.api + "/" + param)
    }
    // 2. Update Data using PUT API method
    updateData(param1: any, param2: any) {
      return this.http.put(this.api + "/" + param1, param2)
    }

  //Post Data User Registration / Sending register data in "users array in API" for page "registration"
  registration(param: any) {
    return this.http.post(this.rootUrl + "/users", param)
  }


  // page "loadmore-data"
  // page "loadmore-data"
  // page "loadmore-data"
  // page "loadmore-data"

  listshow() {
    return this.http.get(this.testapi);
  }

}
