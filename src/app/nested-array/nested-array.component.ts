import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nested-array',
  templateUrl: './nested-array.component.html',
  styleUrls: ['./nested-array.component.scss']
})

export class NestedArrayComponent implements OnInit {
  
  newList:any = [];

  constructor(public common: CommonService) { }

  ngOnInit(): void {
    this.getlist();
  }

  getlist() {

    this.common.nestedArrayList().subscribe({
      next: (res) =>{
        this.newList = res;
        console.log("list data: ", this.newList);
      },
      error: (err) =>{
          if(err.error == 'not found!') {
            console.log("Invalid API Link", err.error);
          }
          else {
            console.log("Something Went Wrong");
          }
      }
    })

  }


}
