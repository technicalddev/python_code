import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-h1',
  templateUrl: './h1.component.html',
})
export class H1Component implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
