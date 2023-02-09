import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})

export class FormGroupComponent implements OnInit {

  addForm: FormGroup | any;
  _username: any;
  _age:any;

  _mobile: any;
  _email: any;

  _mobile2:any;
  _email2:any;

  _innerMobile: any;
  _innerEmail: any;

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addForm = this.fb.group({
      'username': new FormControl(''),
      'age': new FormControl(''),
      'innerForm': this.fb.group({
          'mobile': new FormControl(''),
          'email': new FormControl(''),
          'subInnerForm': this.fb.group({
            'innerMobile': new FormControl(''),
            'innerEmail': new FormControl('')
          })
      }),
      'innerForm2': this.fb.group({
        'mobile2': new FormControl(''),
        'email2': new FormControl(''),
      })
    })
  }

  submitButton() {
    console.log("form value: ", this.addForm.value);
  }

}
