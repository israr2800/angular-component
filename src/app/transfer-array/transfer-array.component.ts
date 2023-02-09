import { Component, OnInit } from '@angular/core';
import { arrayData } from '../data';

@Component({
  selector: 'app-transfer-array',
  templateUrl: './transfer-array.component.html',
  styleUrls: ['./transfer-array.component.scss']
})

export class TransferArrayComponent implements OnInit {

  array1: arrayData[] = [
    {id: 1, name: 'israr ahmad', age: 10},
    {id: 2, name: 'ritesh roy', age: 11},
    {id: 3, name: 'rahul kumar', age: 12},
    {id: 4, name: 'pankaj kumar', age: 13},
    {id: 5, name: 'rakesh yadav', age: 14},
  ]

  array2: arrayData[] = [
    {id: 1, name: 'israr ahmad 2', age: 10},
    {id: 2, name: 'ritesh roy 2', age: 11},
    {id: 3, name: 'rahul kumar 2', age: 12},
    {id: 4, name: 'pankaj kumar 2', age: 13},
    {id: 5, name: 'rakesh yadav 2', age: 14},
  ]

  array3: arrayData[] = [
    {id: 1, name: 'israr ahmad 3', age: 10},
    {id: 2, name: 'ritesh roy 3', age: 11},
    {id: 3, name: 'rahul kumar 3', age: 12},
    {id: 4, name: 'pankaj kumar 3', age: 13},
    {id: 5, name: 'rakesh yadav 3', age: 14},
  ]

  constructor() { }

  ngOnInit(): void {
  }


  button1() {

    this.array1.shift()
    console.log("array 1: ", this.array1);
    
    let spliced = this.array1.shift();
    console.log("removed: ", spliced);
    
    // this.array2.push();

    
  }
  

}
