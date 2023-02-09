import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-dataon-click',
  templateUrl: './input-dataon-click.component.html',
  styleUrls: ['./input-dataon-click.component.scss']
})
export class InputDataonClickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValue = "";
  
  mydata= ""
  myparam: any;

  getValue(param: any) {
    this.mydata = param;
  }

  // with for loop
  loopvalue: any;
  dataArray: any = []
  
  loopgetValue(data: any) {

    this.dataArray.push(data)
  }

}
