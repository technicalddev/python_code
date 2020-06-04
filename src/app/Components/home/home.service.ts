import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getHomeData(): Observable<any> {
    return this.http.get(`../../../assets/data/homeData.json`);
  }
  getInvestorsData(): Observable<any> {
    return this.http.get(`../../../assets/data/investorsData.json`);
  }
  getOffersData(): Observable<any> {
    return this.http.get(`../../../assets/data/offersData.json`);
  }
  getClientData(): Observable<any> {
    return this.http.get(`../../../assets/data/ourClientsData.json`);
  }
}
