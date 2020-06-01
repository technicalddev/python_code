import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-body-small',
  templateUrl: './body-small.component.html',
})
export class BodySmallComponent implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
