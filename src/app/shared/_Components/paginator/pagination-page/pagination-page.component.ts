import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { pagination, rowsPerPage } from 'src/app/shared/_Models/pagination';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'paginator',
  templateUrl: './pagination-page.component.html',
})
export class PaginationPageComponent implements OnInit, OnChanges {
  @Input() counts?: number;
  @Input() limit?: number = rowsPerPage;
  @Input() offset?: number = 0;
  @Input() range: number = 2;
  @Output() onPage = new EventEmitter<any>();
  pages: Observable<number[]>;
  totalPages: number;
  currentPage: number;
  pageLegths: any = pagination;
  constructor() {}

  ngOnInit() {
    if (this.counts > this.limit) {
      this.getPages(this.offset, this.limit, this.counts);
    }
  }
  ngOnChanges() {
    if (this.counts > this.limit) {
      this.getPages(this.offset, this.limit, this.counts);
    }
  }
  getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.pages = Observable.range(-this.range, this.range * 2 + 1)
      .map((x) => this.currentPage + x)
      .filter((page) => this.isValidPageNumber(page, this.totalPages))
      .toArray();
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  onLimitChange(limit: number) {
    const pageObj = {
      limit,
      pageIndex: 1,
      offset: 0,
    };
    setTimeout(() => {
      this.onPage.emit(pageObj);
    }, 20);
  }

  goToPage(index$: any) {
    if (this.isValidPageNumber(index$, this.totalPages)) {
      const pageObj = {
        pageIndex: index$,
        offset: (index$ - 1) * this.limit,
        limit: this.limit,
      };
      setTimeout(() => {
        this.onPage.emit(pageObj);
      }, 30);
    }
  }
}
