import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { navData } from './navdata';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/shared/_Services/scroll.service';

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
    private media: MediaMatcher,
    private router: Router,
    private scrollService: ScrollService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1110px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.navItems = navData;
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let element = document.querySelector('.mt-toolbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-primary');
    } else {
      element.classList.remove('navbar-primary');
    }
  }
  // to close side nave on mobile
  navigateTo(nav: any) {
    if (this.mobileQuery.matches) this.drawer.close();
    const { link } = nav;
    this.router.navigate(['/']);
    this.scrollService.scrollToElementById(link);
  }
}
