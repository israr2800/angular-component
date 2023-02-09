import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-true-false',
  templateUrl: './input-true-false.component.html',
  styleUrls: ['./input-true-false.component.scss']
})
export class InputTrueFalseComponent implements OnInit {
  isChecked: boolean = false;
  isDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
    console.log("checkbox default value: ", this.isChecked);
  }

  isCheckedChange(event: any) {
    this.isChecked =! this.isChecked;
    
    if(this.isChecked) {
      console.log('checked')
      this.isDisabled = false;

      console.log("print value: ",event.target.value);
      
    }
    else {
      console.log('not checked')
      this.isDisabled = true;
    }
  }

  value = 1;

  buttonClick(){
    console.log("value", this.value++);
    console.log("print value: ", this.isChecked);
    
  }

}
