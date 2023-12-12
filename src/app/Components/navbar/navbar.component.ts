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
import { Router, ActivatedRoute } from '@angular/router';
import { ScrollService } from 'src/app/shared/_Services/scroll.service';
import { TranslateService } from '@ngx-translate/core';

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
  logo: string = 'logo_light';
  // tslint:disable
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private router: Router,
    private scrollService: ScrollService,
    private translateService: TranslateService,
    private route: ActivatedRoute
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1110px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

    // Using saved language from previous visit for translation
    try {
      const language = localStorage.getItem('language');
      if (language) {
        this.translateService.use(language);
      } else {
        this.translateService.use('en');
      }
    } catch (e) {}
  }

  ngOnInit(): void {
    this.navItems = navData;
    console.log('router', this.route.snapshot);
    let element = document.querySelector('.mt-toolbar');
    console.log('elementttt', element);

    if (this.router.url == '/privacy-policy') {
      this.logo = 'logo_dark';
      element.classList.add('navbar-primary');
    }
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let element = document.querySelector('.mt-toolbar');
    if (
      window.pageYOffset < element.clientHeight &&
      this.router.url !== '/privacy-policy'
    ) {
      this.logo = 'logo_light';
      element.classList.remove('navbar-primary');
    } else {
      this.logo = 'logo_dark';
      element.classList.add('navbar-primary');
    }
  }
  // to close side nave on mobile
  navigateTo(nav: any) {
    if (this.mobileQuery.matches) this.drawer.close();
    const { link } = nav;
    this.router.navigate(['/']);
    this.scrollService.scrollToElementById(link);
  }

  // Function for changing the language
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    console.log(lang);
  }

  languages: any = [
    { name: 'English', unicode: 'en' },
    { name: 'हिंदी', unicode: 'hn' },
    { name: 'বাঙ্গালী', unicode: 'bn' },
    { name: 'தமிழ்', unicode: 'tm' },
    { name: 'తెలుగు', unicode: 'tl' },
    { name: 'ಕನ್ನಡ', unicode: 'kn' },
    { name: 'मराठी', unicode: 'ma' },
    { name: 'ગુજરાતી', unicode: 'gu' },
  ];
}
