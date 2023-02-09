import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-revise-api-list',
  templateUrl: './revise-api-list.component.html',
  styleUrls: ['./revise-api-list.component.scss']
})
export class ReviseApiListComponent implements OnInit {

  tableSearch = '' // for input searching 
  totalLength: any;
  
  myData: any;
  _quantity: any;
  removedDatat: any;
  
  loadmoreData: any =[];

  p: number = 1;

  constructor(public httpClient : HttpClient, public common: CommonService) { }

  ngOnInit(): void {
    this.showapiList();
  }

  showapiList() {
    this.common.showapi().subscribe({
      next: (res) =>{
        this.myData = res;
        this.totalLength = this.myData.length;

        console.log("mydata : ", this.myData);
        
        if(this.myData.length > 20) {
          for(var i = 0; i < 20; i++) {
            this.loadmoreData.push(this.myData[this.loadmoreData.length]);
            console.log("current list: ", this.loadmoreData); 
          }
        }
        else {
          this.loadmoreData = this.myData;
        }

      }
    })
  }

  onScroll() {
    console.log("infinite scrolled!!");

    if(this.loadmoreData.length < this.myData.length) {
      for(var i = 0; i < 20; i++) {
        this.loadmoreData.push(this.myData[this.loadmoreData.length]);
      }
    }
    else {
      console.log("all data loaded"); 
    }

  }
  
  dec(item: any) {

    if(item.userId <= 1) {
      alert("cannot go below 1");
    }
    else {
     item.userId--
    }

  }

  inc(item: any) {

    if (item.userId >= 5) {
      alert("cannot go above 5");
    }
    else {
      item.userId++;
    }  
  }

  
}
