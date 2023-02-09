import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  registrationForm: UntypedFormGroup | any;

  
  get userid() {
    return this.registrationForm.get('userid')
  }
  get name() {
    return this.registrationForm.get('name')
  }
  get location() {
    return this.registrationForm.get('location')
  }
  get email() {
    return this.registrationForm.get('email')
  }
  get password() {
    return this.registrationForm.get('password')
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword')
  }

  alert = false;

  constructor(public fb: UntypedFormBuilder, public service: DataServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {

this.registrationForm = this.fb.group({
  userid:['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z 0-9]*')]],
  name:['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z 0-9]*')]],
  location:['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z 0-9]*')]],
  email:['', [Validators.required, Validators.email]],
  password:['', [Validators.required, Validators.minLength(3)]],
  confirmPassword:['', [Validators.required, Validators.minLength(3)]],
})

  }

  registerbtn() {

    if(this.registrationForm.get('password') !=  this.registrationForm.get('confirmPassword')) {
      alert("Password Not Matched");
      return;
    }

    this.service.registration(this.registrationForm.value).subscribe((result)=>{
      console.log(result);
      this.alert = true
      this.registrationForm.reset({})
    })

  }

  resetform() {
    this.registrationForm.reset({});
  }

}
