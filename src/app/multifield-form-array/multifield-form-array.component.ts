import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multifield-form-array',
  templateUrl: './multifield-form-array.component.html',
  styleUrls: ['./multifield-form-array.component.scss']
})
export class MultifieldFormArrayComponent implements OnInit {
 
  errorOccured: boolean = false;
  arrayError: boolean = false;

  addForm: FormGroup | any;
  formArray: FormArray | any;
  innerArray:boolean =false;

  _username: any;
  _age:any;

  arrayOne : any;

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addForm = this.fb.group({
      'username': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'age': new FormControl('', Validators.required),
      'formArray': this.fb.array([]),
    })
  }

  createGroup(): FormGroup {
    return this.fb.group({
      'mobile': new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      'email': new FormControl(''),
    })
  }

  addMore() {
    this.formArray = this.addForm.get('formArray') as FormArray;
    this.formArray.push(this.createGroup());
  }

  removeSkill(i:any) {
    this.formArray.removeAt(i);
  }

  submitButton() {
    
    this.errorOccured = true;
    this.arrayError = true;
  
    if(!this.addForm.valid) {
      // alert('form has errors')
    }
    else {
      console.log("form value: ", this.addForm.value);
      
      let formArrayValue = this.addForm.get('formArray').value; // to get form array value
      let newValue = formArrayValue[0].mobile // to show formArray index value

      console.log("form array value: ", newValue);
    }

  }


}
