import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  authForm: UntypedFormGroup | any;


  productForm: UntypedFormGroup | any;
  submitted = false;

  constructor(public fb: UntypedFormBuilder, public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  this.initForm(); 
  this.productEntryForm();
  }

  initForm() {
    this.authForm = new UntypedFormGroup( {
        email: new UntypedFormControl('',[
          Validators.required
        ]),
        password: new UntypedFormControl('',[
          Validators.required
        ])
      }
    )
  }
  
  registerbtn() {
    this.authService.register(this.authForm.value).subscribe((result)=>{
      console.log(result);
      this.router.navigateByUrl('/auth-login');
    })
  }


  // MAKING ENTRY IN PRODUCT API
  productEntryForm() {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      cost: ['', [Validators.required]]
    })

  }
  get name() {
    return this.productForm.get('name')
  }
  get cost() {
    return this.productForm.get('cost')
  }

  productPost() {
    
    this.submitted = true; // for error message show

    if(this.productForm.valid) {
      console.log("Form Value:", this.productForm.value);
      this.authService.postInProduct(this.productForm.value).subscribe((res)=>{
        console.log("respnsove:", res);
        this.productForm.reset({})
      })
      return;
    }
    console.log("form not valid");
  }

  // MAKING ENTRY IN PRODUCT API END

}
