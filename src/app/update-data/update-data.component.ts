import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../data.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {

  reactiveform: UntypedFormGroup | any
  alert = false

  constructor(public fb: UntypedFormBuilder, public activeRoute: ActivatedRoute, public service: DataServiceService, public router: Router) { }


  ngOnInit(): void {

    console.log(this.activeRoute.snapshot.params['id']);

    this.updateForm();
  }

  initForm() {
    this.reactiveform = this.fb.group({
      name:['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]],
      location:['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]],
      email:['', [Validators.required, Validators.email]],
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

  

  updateForm() {
    this.service.getdataEdit(this.activeRoute.snapshot.params['id']).subscribe((result)=>{
      console.log(result);

      this.initForm();
    })
  }
  
  formSubmitbutton() {
    this.service.updateData(this.activeRoute.snapshot.params['id'], this.reactiveform.value).subscribe((result)=> {
      console.log(result);
      this.alert = true;
      this.router.navigateByUrl('api-list');
    })
  }



}
