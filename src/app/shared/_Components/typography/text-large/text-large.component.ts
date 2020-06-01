import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-text-large',
  templateUrl: './text-large.component.html',
})
export class TextLargeComponent implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
