import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { investors } from './investors.mock';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'mt-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss'],
})
export class InvestorsComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  mobileQueryListener: () => void;
  baseURL: string = '../../../../assets/img/page/';
  investorsList: any[];
  homeSection: any = {};
  secondSection: any = {};
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1110px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.investorsList = investors;
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
