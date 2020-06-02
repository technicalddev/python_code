import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { offers } from './offering.mock';

@Component({
  selector: 'mt-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.scss'],
})
export class OfferingComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  mobileQueryListener: () => void;
  baseURL: string = '../../../../assets/img/page/';
  offers: any = [];
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1110px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.offers = offers;
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
