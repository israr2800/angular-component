import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-duplicate-array',
  templateUrl: './duplicate-array.component.html',
  styleUrls: ['./duplicate-array.component.scss']
})
export class DuplicateArrayComponent implements OnInit {

  finduplicate: any;

  constructor(public common: CommonService) { }

  ngOnInit(): void {

    var valuarra = [1, 5, 5, 1, 25, 9, 62, 6, 9, 9];
    console.log("printvalue: ", valuarra);

    this.finduplicate = valuarra.filter((res, index) => valuarra.indexOf(res) !== index); // finding duplicate items
    // this.finduplicate = valuarra.filter((res, index) => valuarra.indexOf(res) == index ); //remove '!' sign to remove duplicate items


  }

}
