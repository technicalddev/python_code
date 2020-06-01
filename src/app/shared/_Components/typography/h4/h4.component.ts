import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-h4',
  templateUrl: './h4.component.html',
})
export class H4Component implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {}
}
