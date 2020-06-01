import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-btn',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() type?: string = 'button';
  @Input() color?: string;
  @Input() class?: string;
  @Input() loading?: boolean = false;
  @Input() disabled?: boolean;

  @Output() onAction = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  action() {
    this.onAction.emit();
  }
}
