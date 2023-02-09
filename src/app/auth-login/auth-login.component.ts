import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  providers: [AuthService] 
})
export class AuthLoginComponent implements OnInit {

  authLogin: UntypedFormGroup | any;

  user: any;
  pwd: any;
  data: any;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authLogin = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required
      ]),
      password: new UntypedFormControl('', [
        Validators.required
      ]),
    })
    
  }

  login() {
    
    this.authService.login(this.user, this.pwd).subscribe((result)=>{

      // also a way to do// this.data = Object.assign(result); // Object.assign required for localStorage
      // also a way to do// localStorage.setItem('token', JSON.stringify(this.data.access_token)); // JSON.stringify+dataProperty+ACCESS_TOKEN-format    

      localStorage.setItem('token', result.access_token);

      console.log(result);
      this.router.navigate(['auth-success']);
      
    }, error => {
      console.log(error);
      this.router.navigate(['auth-login']);
    });

  }

}
