import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { navData } from './navdata';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('sideNav') drawer: MatSidenav;
  mobileQuery: MediaQueryList;
  mobileQueryListener: () => void;
  navItems: any = [];
  // tslint:disable
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.navItems = navData;
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
  // to close side nave on mobile
  navigateTo(nav: any) {
    window.scroll(0, 0);
    if (this.mobileQuery.matches) this.drawer.close();
  }
}
