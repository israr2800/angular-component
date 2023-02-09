import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

@ViewChild('addStyle') changeStyle: ElementRef | any;

  constructor(public common: CommonService, public render: Renderer2) { }

  ngOnInit(): void {
  }

  styleButton(){
    this.render.setStyle(this.changeStyle.nativeElement,'background','yellow');
    this.render.addClass(this.changeStyle.nativeElement,'newClass');
  }

}
