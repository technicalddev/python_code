import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-body-large',
  templateUrl: './body-large.component.html',
})
export class BodyLargeComponent implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
