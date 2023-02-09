import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-max-value',
  templateUrl: './min-max-value.component.html',
  styleUrls: ['./min-max-value.component.scss']
})
export class MinMaxValueComponent implements OnInit {
  
  currentResult: any;
  reduceResult: any;
 
  namearray = [
    {
      id: 1,
      name: "rahul",
      age: 23
    },
    {
      id: 2,
      name: "israr",
      age: 27
    }
 ]

  constructor() { }

  ngOnInit(): void {
    var newvar = [1, 7, 1, 3, 1];

    this.currentResult = Math.min(...newvar);

    this.reduceResult = this.namearray.reduce((value, index) => value + index.id,0);

  }

}
