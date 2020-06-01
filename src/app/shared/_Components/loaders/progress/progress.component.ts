import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-progress',
  templateUrl: './progress.component.html',
})
export class ProgressComponent implements OnInit {
  @Input() value?: number;

  constructor() {}

  ngOnInit() {}
}
