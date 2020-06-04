import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-clear-dept',
  templateUrl: './clear-dept.component.html',
  styleUrls: ['./clear-dept.component.scss'],
})
export class ClearDeptComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';
  postObj: any = {};
  submitting: boolean;
  constructor() {}

  ngOnInit(): void {}

  onChanges(model: any, value: any) {
    this.postObj[model] = value;
  }

  onProcessContact() {
    this.submitting = true;
    const { name, email, phone } = this.postObj;
    if (!name || !email || !phone) {
      this.submitting = false;
      return;
    }
    console.log('final postObj', this.postObj);
  }
}
