import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'paginator-dot',
  templateUrl: './pagination-dot.component.html',
})
export class PaginationDotComponent implements OnInit {
  @Input() pages?: any;
  activeIndex: any;
  constructor() {}

  ngOnInit() {
    this.activeIndex = 1;
  }
  goToPage(index) {
    this.activeIndex = index;
  }
}
