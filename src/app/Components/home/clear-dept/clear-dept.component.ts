import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../home.service';

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
  constructor(private homeService: HomeService) {}

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
    const emailBody: any = {
      Subject: `${name} want to clear dept`,
      Body: `<b>Name: </b> ${name} <br>
        <b>Email: </b> ${email} <br>
        <b>Phone: </b> ${phone}`,
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
