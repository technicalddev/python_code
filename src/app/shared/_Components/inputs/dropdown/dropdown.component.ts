import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
  @Input() items?: any = [];
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() required?: boolean;
  @Input() variant?: string;
  @Input() model?: string;
  @Input() disabled?: boolean;
  @Input() value?: any;
  @Input() filter?: any;
  @Input() display?: string;
  @Input() multiple?: boolean;
  @Input() class?: string;
  @Output() onselect = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
  onSelectAll(e) {
    this.onselect.emit(this.model);
  }
  onChange(event) {
    this.onselect.emit(event);
  }
}
