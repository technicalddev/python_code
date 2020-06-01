import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-h2',
  templateUrl: './h2.component.html',
})
export class H2Component implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
