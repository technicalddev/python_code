import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { send } from 'src/assets/js/smtp.js';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient, private sb: MatSnackBar) {}

  getHomeData(): Observable<any> {
    return this.http.get(`../../../assets/data/homeData.json`);
  }
  getInvestorsData(): Observable<any> {
    return this.http.get(`../../../assets/data/investorsData.json`);
  }
  getOffersData(): Observable<any> {
    return this.http.get(`../../../assets/data/offersData.json`);
  }
  getMediaCoverage(): Observable<any> {
    return this.http.get(`../../../assets/data/mediaCoverage.json`);
  }
  getClientData(): Observable<any> {
    return this.http.get(`../../../assets/data/ourClientsData.json`);
  }
  getBlogs(): Observable<any> {
    return this.http.get(`../../../assets/data/blogsData.json`);
  }
  getLoansData(): Observable<any> {
    return this.http.get(`../../../assets/data/loansData.json`);
  }
  sendMail(postObj: any): Promise<any> {
    let msg: any = {};
    const { Subject, Body } = postObj;
    const senderEmail = 'support@moneytor.in';
    return send({
      Body,
      Subject,
      SecureToken: 'aa1f4fac-c866-476c-8838-f7c50553a8a8',
      To: senderEmail,
      From: senderEmail,
    })
      .then((m: any) => {
        msg = {
          resultShort: 'success',
          resultLong: `we will get back to you shortly`,
          message: m,
        };
        this.showErr(msg.resultLong, msg.resultShort);
        return msg;
      })
      .catch((err: any) => {
        this.showErr('Something went wrong', 'failure');
        msg = {
          resultShort: 'failure',
          resultLong: `Something went wrong`,
          message: err,
        };
        this.showErr(msg.resultLong, msg.resultShort);
        return msg;
      });
  }

  showErr(m1: string, m2: string) {
    this.sb.open(m1, m2, { duration: 5000, panelClass: [m2.toLowerCase()] });
  }
}
