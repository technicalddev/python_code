import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'mt-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss'],
})
export class InvestorsComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';
  investorsList: any = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getInvestorsData();
  }
  getInvestorsData() {
    this.homeService.getInvestorsData().subscribe((res) => {
      const { data } = res;
      if (data && data.length > 0) {
        this.investorsList = data;
      }
    });
  }
}
