import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-styles-toggle',
  templateUrl: './class-styles-toggle.component.html',
  styleUrls: ['./class-styles-toggle.component.scss']
})
export class ClassStylesToggleComponent implements OnInit {

  myclass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
