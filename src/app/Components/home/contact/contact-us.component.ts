import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
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
    const { firstName, companyName } = this.postObj;
    if (!firstName || !companyName) {
      this.submitting = false;
      return;
    }
    console.log('final postObj', this.postObj);
  }
}
