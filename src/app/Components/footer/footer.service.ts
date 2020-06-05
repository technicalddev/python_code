import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FooterService {
  constructor(private http: HttpClient) {}

  getFooterData(): Observable<any> {
    return this.http.get(`../../../assets/data/footerData.json`);
  }
}
