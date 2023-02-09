import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})

export class FormArrayComponent implements OnInit {

  addForm: FormGroup | any;
  _username: any;
  _mobile: any;
  _firstname: any;
  _lastname: any;
  _employeeArray: any = [];

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    
  this.addForm = this.fb.group({
    'username': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required),

    'innerGroup': this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
    }),

    'addEmployee': this.fb.array([
      new FormControl('', Validators.required)
    ]) 

  })
  
  // this.addForm = new FormGroup({
  //   'username': new FormControl('', Validators.required),
  //   'mobile': new FormControl('', Validators.required),
  //   'innerGroup': new FormGroup({
  //     'firstname': new FormControl('', Validators.required),
  //     'lastname': new FormControl('', Validators.required),
  //   }),
  //   'addEmployee': new FormArray([
  //     new FormControl('', Validators.required)
  //   ])
  // })
  }

  addMore() {
    this.addForm.get('addEmployee').push(new FormControl(''));
  }

  submitButton() {
    console.log("form value: ", this.addForm.value);
    console.log("array print: ", this.addForm.addEmployee[1]);
  }

}
