import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.scss']
})
export class SwitchCaseComponent implements OnInit {
  
  switchWrapper=""
  
  constructor() { }

  ngOnInit(): void {
    // this.switchWrapper = "blue"
  }

  redbtn() {
    this.switchWrapper = 'red'
  }
  greenbtn() {
    this.switchWrapper = 'green'
  }
  bluebtn() {
    this.switchWrapper = 'blue'
  }
}
