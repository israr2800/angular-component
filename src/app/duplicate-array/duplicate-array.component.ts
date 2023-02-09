import { Component, OnInit } from '@angular/core';
// import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-duplicate-array',
  templateUrl: './duplicate-array.component.html',
  styleUrls: ['./duplicate-array.component.scss']
})
export class DuplicateArrayComponent implements OnInit {

  finduplicate: any;

  nearay = [
    {
      id: 1,
      name: 'israr'
    },
    {
      id: 2,
      name: 'rahul'
    },
    {
      id: 3,
      name: 'rakesh'
    }
  ]
  
  tableResult:any =[];
  newlist: any = [];
  
  constructor(public common: CommonService) { }

  ngOnInit(): void {

    var valuarra = [1,5,5,1,25,9,62,6,9,9];

    console.log("printvalue: ", valuarra);
  
    this.finduplicate = valuarra.filter((res, index) => valuarra.indexOf(res) !== index );
    // this.finduplicate = valuarra.filter((res, index) => valuarra.indexOf(res) == index ); //remove '!' sign to remove duplicate values
    

  }

}
