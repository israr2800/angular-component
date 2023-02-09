import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-responsive-menus',
  templateUrl: './responsive-menus.component.html',
  styleUrls: ['./responsive-menus.component.scss']
})
export class ResponsiveMenusComponent implements OnInit {


  // navigationMenu = "";

  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() { }

  ngOnInit(): void {
  }

  // someMethod() {
  //   this.trigger.openMenu();
  // }

  // toggleMobileMenus() {
  //   if( this.navigationMenu == "" ){
  //     this.navigationMenu = "enable"
  //   }
  //   else {
  //     this.navigationMenu = ""
  //   }
  // }


}
