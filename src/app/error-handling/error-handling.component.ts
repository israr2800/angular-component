import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss']
})

export class ErrorHandlingComponent {

  addForm: FormGroup | any;
  _userid: any;
  _pass: any;

  loginResult: any;

  err = this.common.errMsg;

  constructor(public fb : FormBuilder, public common: CommonService) {

  }

  ngOnInit(){
    this.initForm();
  }

  initForm() {
    this.addForm = this.fb.group({
      userid: new FormControl(''),
      pass: new FormControl('')
    })
  }

  loginButton() {
    console.log("form value: ", this.addForm.value);

    this.common.errorHandlingPage(this._userid, this._pass).subscribe({
      next: (res) =>{
        this.loginResult = res;
        console.log("Login Result: ", this.loginResult);
        localStorage.setItem('token', this.loginResult.token);
        console.log(this.loginResult.token);
      }
    })

  }

}
