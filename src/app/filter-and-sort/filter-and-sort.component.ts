import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-and-sort',
  templateUrl: './filter-and-sort.component.html',
  styleUrls: ['./filter-and-sort.component.scss']
})
export class FilterAndSortComponent implements OnInit {

  filter: any;
  sorting:any;
  newSorting: any;

  namearray = [
    {
      id: 1,
      name: "israr",
      age: 27
    },
    {
      id: 2,
      name: "rahul",
      age: 23
    },
    
 ]
 
  constructor() {
    
  }

  ngOnInit(): void {
    
    // var newvar = [0, 1, 0, 1, 0, 1]; // working
    var newvar = [8,1,100,6,51,11,79,9]; // not working
    console.log("array value: ", newvar);

    this.filter =  this.namearray.filter((res) => res.age >= 25);
    
    console.log("filter value: ", this.filter);

    
    // sorted value=======================

    this.sorting = this.namearray.sort((a, b) => a.age - b.age);
    // newvar.sort((a, b) => a.value - b.value);

    // this.sorting = newvar.sort().reverse() // decending order
    
    console.log("sorted: ", this.sorting);
  
  }


}
