import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-body-medium',
  templateUrl: './body-medium.component.html',
})
export class BodyMediumComponent implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
