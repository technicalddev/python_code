import { Component, OnInit, Input } from '@angular/core';
import { ContactUsService } from './contact-us.service';
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

  ngOnInit(): void {
    console.log('in ContactUsComponent ============');
    const contactUsService = new ContactUsService();
    const to = 'shashank.gandhi@moneytor.in';
    const subject = 'Hello';
    const text = 'Hello from gmailService';
    const from = 'shashank.gandhi@moneytor.in';
    contactUsService.sendMail(from, to, subject, text);
    console.log('in ContactUsComponent ============ end ==============');
  }

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
