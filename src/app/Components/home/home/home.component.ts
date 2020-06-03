import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { HomeService } from '../home.service';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  baseURL: string = '../../../../assets/img/page/';
  mobileQueryListener: () => void;
  homeSection: any = {};
  secondSection: any = {};
  bg: string;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private homeService: HomeService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 991px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.getHomeData();
  }
  getHomeData() {
    this.homeService.getHomeData().subscribe((res) => {
      const { homeSection, secondSection, backgroundImg } = res;
      this.homeSection = homeSection;
      this.secondSection = secondSection;
      this.bg = backgroundImg;
    });
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
