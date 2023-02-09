import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-auth-success',
  templateUrl: './auth-success.component.html',
  styleUrls: ['./auth-success.component.scss']
})

export class AuthSuccessComponent implements OnInit {

  myData: any = []
  constructor(public actRouter: ActivatedRoute, public router: Router, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.productList().subscribe((result) => {
      console.log(result);
      this.myData = result;
    }, error => {
      console.log(error);
    })
  }

  delete(id: any) {
    this.authService.deleteList(id).subscribe((res)=>{
      console.log("deleted Item:", res);
      this.myData.splice(id-1, 1);
    })
  }


}
