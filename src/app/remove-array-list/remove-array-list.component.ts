import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-array-list',
  templateUrl: './remove-array-list.component.html',
  styleUrls: ['./remove-array-list.component.scss']
})
export class RemoveArrayListComponent implements OnInit {

  newArray: any = [];
  Seletecvlaue = [];

  isChecked = false;

  currentIndex: any = [];

  arrayNested = [
    {
      id: 1, name: 'israr ahmad', age: 10,
      innerArray: [
        { id: 1, location: 'delhi' },
        { id: 2, location: 'Noida' },
        { id: 3, location: 'Gurgaon' },
      ]
    },
    { id: 2, name: 'ritesh roy', age: 11 },
    { id: 3, name: 'rahul kumar', age: 12 },
    { id: 4, name: 'pankaj kumar', age: 13 },
    { id: 5, name: 'rakesh yadav', age: 14 },
  ]

  newarraya: any = []

  constructor() { }

  ngOnInit(): void {

    // for(let i = 0; i < this.arrayNested.length; i++) {
    //     this.arrayNested[i].age = this.arrayNested[i].age - 2
    // } // for calculation in arrays item value

    // this.newarraya = this.arrayNested.reduce((res, index) => res + index.age, 0);
    // console.log("new value: ", this.newarraya);

  }
  
  removeFirst() {
    // this.arrayList.splice(0,1); // can use this method also
    this.arrayNested.shift();
    console.log("array print: ", this.arrayNested);
  }

  removeLast() {
    // this.arrayList.splice(-1); // can use this method also
    this.arrayNested.pop();
    console.log("array print: ", this.arrayNested);
  }

  deleteButton(item: any) {
    let id = this.arrayNested.indexOf(item); // get index of current item
    this.arrayNested.splice(id, 1);
  }

  checkChange(item: any, event: any) {

    this.Seletecvlaue = item;
    let check = event.target.checked;

    if (check) {
      this.newArray.push(this.Seletecvlaue)
      console.log("arraylist: ", this.newArray);
    }
    else {

      check = this.newArray.indexOf(item);

      this.newArray.splice(check, 1);
      console.log("arraylist: ", this.newArray);
    }

  }

  sendSelected() {
    console.log("selected array: ", this.newArray);
  }

  deleteSelected() {

    this.newArray.forEach((item: any) => {
      let cid = this.arrayNested.indexOf(item);
      console.log(cid);
      this.arrayNested.splice(cid, 1);
    })
    // israr change news test git
    //new lines also added
  }

}
