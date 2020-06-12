import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../home.service';
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

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  onChanges(model: any, value: any) {
    this.postObj[model] = value;
  }
  onProcessContact() {
    this.submitting = true;
    const { firstName, lastName, companyName, message } = this.postObj;
    if (!firstName || !companyName) {
      this.submitting = false;
      return;
    }
    const emailBody: any = {
      Subject: `Want to Reach us ${companyName}`,
      Body: `<b>Name: </b> ${firstName} ${lastName} <br>
        <b>Company/Organization: </b> ${companyName} <br>
        <b>Message: </b> ${message}`,
    };
    this.homeService.sendMail(emailBody).then((res) => {
      const { resultShort } = res;
      if (resultShort === 'success') {
        this.postObj = {};
      }
      this.submitting = false;
    });
  }
}
