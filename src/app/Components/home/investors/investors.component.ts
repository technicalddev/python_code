import { Component, OnInit, Input } from '@angular/core';
import { investors } from './investors.mock';

@Component({
  selector: 'mt-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss'],
})
export class InvestorsComponent implements OnInit {
  @Input() isMobile: boolean = false;
  baseURL: string = '../../../../assets/img/page/';
  investorsList: any[];
  homeSection: any = {};
  secondSection: any = {};
  constructor() {}

  ngOnInit(): void {
    this.investorsList = investors;
  }
}
