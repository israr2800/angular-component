import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childResult: any;

  constructor() { }

  ngOnInit(): void {
    this.childResult = "No Child Data Yet"
  }

}
