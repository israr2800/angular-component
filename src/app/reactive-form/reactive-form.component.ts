import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {


  reactiveform : UntypedFormGroup | any;

  alert = false

  storProp: any = {};

  submitted = false;
  
  constructor(public fb: UntypedFormBuilder, public service: DataServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){

    // this.reactiveform = new FormGroup({
    //   name: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(4),
    //     Validators.pattern('[a-zA-Z ]*')
    //   ]),
    //   location: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(4),
    //     Validators.pattern('[a-zA-Z ]*')
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.email
    //   ])
    // })

    this.reactiveform = this.fb.group({
      name:['', [Validators.required,Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')] ],
      location:['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')] ],
      email:['', [Validators.required, Validators.email] ]
    })
    
  }

  get name() {
    return this.reactiveform.get('name')
  }
  get location() {
    return this.reactiveform.get('location')
  }
  get email() {
    return this.reactiveform.get('email')
  }

  formSubmitbutton(){

// LOCAL STORAGE SETTINGS
// this.reactiveform.controls['username'].reset() // RESET SPECIFIC FIELD ONLY
// localStorage.setItem('keyName', value); // SET ON LOCAL STORAGE
// localStorage.clear(); // CLEAR ALL LOCAL STORAGE
// localStorage.removeItem('users'); //  remove/delete the item with the specified key from the browser storage  

// LOCAL STORAGE
// https://www.youtube.com/watch?v=UNyZ90hoAHw&ab_channel=StudyMash
    this.storProp = Object.assign(this.reactiveform.value)
    localStorage.setItem("keynames", JSON.stringify(this.storProp))
// LOCAL STORAGE END


  this.submitted = true;
    console.log(this.reactiveform.value);
    this.service.reactiveForm(this.reactiveform.value).subscribe(()=>{
      this.alert = true;
      this.reactiveform.reset({});
    });

  }

  
  resetForm() {
    this.reactiveform.reset({})
}


  strData: any = {};
  
  locaragDataPrint() {
    let getdata = localStorage.getItem('keynames');
    this.strData = getdata;
    console.log(this.strData);
  }

}
