import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() type?: string = 'text';
  @Input() required?: boolean;
  @Input() class?: string;
  @Input() pattern?: string;
  @Input() model?: string;
  @Input() disabled?: boolean;
  @Input() iconPlace?: string = null;
  @Input() icon: string = null;

  @Output() onChanges = new EventEmitter<any>();
  inputType: any;

  hide: boolean = false;
  constructor() {}

  ngOnInit() {
    this.hide = this.type === 'password' ? true : false;
    this.inputType = this.type;
  }

  showHidePass($event) {
    this.hide = this.hide ? false : true;
    this.type = this.hide ? 'password' : 'text';
  }
  onModelChange(e) {
    this.onChanges.emit(e);
  }
}
