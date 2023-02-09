import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data.service';
import { SearchPipe } from '../pipe/search.pipe';

@Component({
  selector: 'app-loadmore-data',
  templateUrl: './loadmore-data.component.html',
  styleUrls: ['./loadmore-data.component.scss']
})
export class LoadmoreDataComponent implements OnInit {

  tableSearch: any; // for search-pipe-filter 

  dataList: any;
  totalData: any = []

  constructor(public httpClient: HttpClient, public dataService: DataServiceService) { }

  ngOnInit(): void {
    this.listData();
  }

  listData() {
    this.dataService.listshow().subscribe((res)=>{
      this.dataList = res;

     this.totalData = []

      if(this.dataList.length > 10) {

        for(var i = 0; i < 10; i++) {
          this.totalData.push(this.dataList[i])
        }

      }

    })
  }

  showmore(){ 
    for(var i = 0; i < 10; i++) {
      this.totalData.push(this.dataList[this.totalData.length])
    }
  }
}
