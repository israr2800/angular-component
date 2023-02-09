import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-keyvalue',
  templateUrl: './print-keyvalue.component.html',
  styleUrls: ['./print-keyvalue.component.scss']
})
export class PrintKeyvalueComponent implements OnInit {

  users= [
    {name: 'israr', age: 27},
    {name: 'rahul', age: 26},
    {name: 'ahush', age: 25},
  ]

  printvalue: any = [];
  
  constructor() { }

  ngOnInit(): void {

    this.printvalue = this.users;

    // for(let value of Object.keys(this.users)) {
    //   this.printvalue = value
    //   console.log(this.printvalue); 
    // }

    this.printvalue.forEach((element: any) => {
        console.log(element);
    });

  }

}
