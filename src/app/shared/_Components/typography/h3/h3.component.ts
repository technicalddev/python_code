import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-h3',
  templateUrl: './h3.component.html',
})
export class H3Component implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
