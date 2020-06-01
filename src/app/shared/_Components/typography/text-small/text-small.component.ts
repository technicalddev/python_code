import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-text-small',
  templateUrl: './text-small.component.html',
})
export class TextSmallComponent implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
