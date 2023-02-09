import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data.service';

@Component({
  selector: 'app-show-api-list',
  templateUrl: './show-api-list.component.html',
  styleUrls: ['./show-api-list.component.scss']
})

export class ShowApiListComponent implements OnInit {

  myData:any = []

  tableSearch = "";
  
  constructor(public service: DataServiceService) { }

  ngOnInit(): void {
    this.service.showlist().subscribe((result)=>{
      console.log("api list data: ", result);
      this.myData = result;
    });
  }

  deleteData(item: any) {  

    this.myData.splice(item-1, 1)

    this.service.deleteapiData(item).subscribe((result)=>{
      console.log(this.myData);
    })
    
    
  }


}
