import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() variant: string = 'primary';
  @Output() onAction = new EventEmitter<any>();
  @Input() buttons: any = [
    { label: 'Cancel', class: 'nobg error', submit: false },
    { label: 'Submit', class: '', submit: true },
  ];
  disabled: boolean = false;
  constructor() {}

  ngOnInit() {
    const btns = [{ label: 'Cancel', class: 'nobg error', submit: false }];
    if (this.variant === 'delete') {
      const arr = [{ label: 'Delete', class: 'error', submit: true }];
      this.buttons = [...btns, ...arr];
    }
    if (this.variant === 'warning') {
      const arr = [{ label: 'Submit', class: 'warning', submit: true }];
      this.buttons = [...btns, ...arr];
    }
  }

  onClickAction($event: any) {
    this.onAction.emit($event);
    this.disabled = true;
  }
}

// update your button names
// actionBtns: any = [
//   { label: 'Cancel', class: 'nobg error', submit: false },
//   { label: 'Allocate to user', class: '', submit: true }
// ]
