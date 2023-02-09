import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  result: any;
  
  constructor() { }

  ngOnInit(): void {
    this.result = 'no Data'
  }

  array = [
    {
      list: "first list"
    },
    {
      list: "second list"
    },
    {
      list: "third list"
    }
  ]

  changeValue(data: any) {
    this.result = data
  }

}
