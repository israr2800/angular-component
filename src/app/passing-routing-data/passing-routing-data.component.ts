import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-passing-routing-data',
  templateUrl: './passing-routing-data.component.html',
  styleUrls: ['./passing-routing-data.component.scss']
})

export class PassingRoutingDataComponent implements OnInit {

  routingData: any;

  constructor(public router: Router, public location: Location, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((res) =>{
      this.routingData = res['name'];
    })
  }

  ngOnInit(): void {
  }

}
