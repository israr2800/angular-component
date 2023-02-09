import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-auth-update-list',
  templateUrl: './auth-update-list.component.html',
  styleUrls: ['./auth-update-list.component.scss']
})
export class AuthUpdateListComponent implements OnInit {

  authUpdateForm: UntypedFormGroup | any;
  submitted = false;
  data: any;
  
  constructor(public fb: UntypedFormBuilder, public router: Router, public authService: AuthService, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.udpateForm();

    this.authService.updateListData(this.activatedRoute.snapshot.params['id']).subscribe((res)=>{
      console.log(res);
      
      this.data = res;

      this.authUpdateForm = this.fb.group({
        name: ['', Validators.required],
        cost: ['', [Validators.required, Validators.pattern('[0-9]*')]]
      })
      
    })
    
  }

  udpateForm() {
    this.authUpdateForm = this.fb.group({
      name: ['', Validators.required],
      cost: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    })
  }

  get cost() {
    return this.authUpdateForm.get('cost');
  }

  updateList() {
    this.submitted = true;

    if(!this.authUpdateForm.valid) {
      console.log("Update form no valid");
    }
    else {
      let id = this.activatedRoute.snapshot.params['id']
      let formValue = this.authUpdateForm.value

      this.authService.updateDataEntry(id, formValue).subscribe((res)=>{
        console.log("res", res);
        this.router.navigate(['auth-success']);
      })
    };

  }

}
