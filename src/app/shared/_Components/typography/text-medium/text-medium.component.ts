import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-text-medium',
  templateUrl: './text-medium.component.html',
})
export class TextMediumComponent implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
