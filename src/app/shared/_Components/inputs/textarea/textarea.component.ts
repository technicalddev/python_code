import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-textarea',
  templateUrl: './textarea.component.html',
})
export class TextareaComponent implements OnInit {
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() required?: boolean;
  @Input() variant?: string;
  @Input() class?: number = 4;
  @Input() model?: string;
  @Input() disabled?: boolean;
  @Input() rows?: number = 4;

  @Output() onChanges = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onModelChange(e) {
    this.onChanges.emit(e);
  }
}
