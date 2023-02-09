import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, from, toArray} from 'rxjs';

@Component({
  selector: 'app-interview-failed',
  templateUrl: './interview-failed.component.html',
  styleUrls: ['./interview-failed.component.scss']
})

export class InterviewFailedComponent implements OnInit {

  selectBox: any;
  selectedValue: any = [];
  newUsers: any =[];
  findAge: any;

  currentUserid: any;
  printUsers: any;
  currentSubs: any;

  constructor() { }

subscriptions = [
  {
    id: '1',
    userId: '1',
    name: 'Mobile service',
    price: 2.2
  },
  {
    id: '2',
    userId: '1',
    name: 'Text service',
    price: 0.44
  },
  {
    id: '3',
    userId: '2',
    name: 'Mobile service',
    price: 3.1
  },
  {
    id: '1',
    userId: '3',
    name: 'Mobile service',
    price: 5
  },
  {
    id: '2',
    userId: '3',
    name: 'Text service',
    price: 66.98
  },
  {
    id: '3',
    userId: '3',
    name: 'Abroad charges',
    price: 12.4
  }
]

users = [
    {
      id: '1',
      name: 'John Doe',
      age: 24
    },
    {
      id: '2',
      name: 'Jane Doe',
      age: 16
    },
    {
      id: '3',
      name: 'israr ahmad',
      age: 12
    },
    {
      id: '4',
      name: 'Richard Maple',
      age: 65
    }
]

  ngOnInit(): void {
  
    const newUsers = from(this.users);

    newUsers.pipe(
      filter(user => user.age < 18),
      toArray()).subscribe(res => {
      this.printUsers = res;
      console.log("print users: ", this.printUsers);
    })
    this.currentSubs = this.subscriptions;

  }

  userChange(event: any) {

    this.currentUserid = event.target.value
    
    console.log("current age: ", this.currentUserid);

    const subs = from(this.subscriptions);
    subs.pipe(
      filter(subss => subss.userId == this.currentUserid),
      toArray()
    ).subscribe(res =>{
      this.currentSubs = res;
      console.log("current Subs: ", this.currentSubs);
    })

  }



}
