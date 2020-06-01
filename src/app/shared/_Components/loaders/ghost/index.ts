import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ghost-loader',
  templateUrl: 'index.html',
})
export class GhostLoaderComponent implements OnInit, OnChanges {
  @Input() loaderCount: any;
  @Input() loaderType: any;
  arrLoader: any = [];
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    for (let i = 0; i < this.loaderCount; i++) {
      this.arrLoader.push(i);
    }
  }
}
