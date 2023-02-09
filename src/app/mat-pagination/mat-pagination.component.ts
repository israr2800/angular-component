import { Component, Pipe, ViewChild } from '@angular/core';
import { MatPaginator, } from '@angular/material/paginator';
import { CommonService } from '../common.service';
import { SearchPipe } from '../pipe/search.pipe';

@Component({
  selector: 'app-mat-pagination',
  templateUrl: './mat-pagination.component.html',
  styleUrls: ['./mat-pagination.component.scss']
})
export class MatPaginationComponent {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: any;

  pageSizeOptions = [10, 20, 50, 100]
  array: any;
  pageSize = 10;
  pageIndex = 0;
  length = 0;

  constructor(
    public common:CommonService,
    public search: SearchPipe
  ) {

  }

  ngOnInit(): void {
    this.getArray();
  }

  handlePage(e: any) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }


getArray() {
  this.common.showapi()
    .subscribe((response) => {
      this.dataSource = response;
      this.dataSource.paginator = this.paginator;
      this.array = response;
      this.length = this.array.length;
      this.iterator();
    });
}

  private iterator() {
    const end = (this.pageIndex + 1) * this.pageSize;
    const start = this.pageIndex * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }

}
