import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HomeService } from '../home.service';
import { ScrollService } from 'src/app/shared/_Services/scroll.service';
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'mt-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.scss'],
})
export class OfferingComponent implements OnInit, OnChanges {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';
  offers: any = [];
  show: boolean = true;
  newData: any = []; // Define newData property to hold the JSON data
  showMore: boolean = false;

  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    centeredSlides: true,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
      400: {
        initialSlide: 0,
        slidesPerView: 1,
      },
      768: {
        initialSlide: 1,
        slidesPerView: 2,
      },
      1024: {
        initialSlide: 2,
        slidesPerView: 4,
      },
    },
  };

  buttonAction() {
    this.scrollService.scrollToElementById('reachus');
  }

  private pagination: SwiperPaginationInterface = {
    el: '.mt-inv-pg',
    clickable: true,
    hideOnClick: false,
  };

  constructor(
    private homeService: HomeService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.getOffersData();
    this.newData = [
      {
        heading: 'Collections',
        description:
          "Moneytor's digital first collection offering enables lenders to communicate with their borrowers through multiple modes and in multiple languages.",
        button: 'Get started',
      },
      {
        heading: 'Debt Purchase',
        description:
          'With our data driven collections portfolio analysis, we offer portfolio liquidation services enabling lenders to release up tied capital and optimize cashflows.',
        button: 'Know more',
      },
    ];
  }

  ngOnChanges() {
    const extraConfigs: SwiperConfigInterface = {
      pagination: this.pagination,
      slidesPerView: this.isMobile ? 1 : 4,
    };
    this.config = { ...this.config, ...extraConfigs };
  }

  getOffersData() {
    this.homeService.getOffersData().subscribe((res) => {
      const { data } = res;
      if (data && data.length > 0) {
        this.offers = data;
      }
    });
  }

  // buttonAction() {
  //   this.scrollService.scrollToElementById('reachus');
  // }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  onIndexChange(index: number) {
    // console.log('Swiper index: ', index);
  }

  onSwiperEvent(event: string): void {
    // console.log('Swiper event: ', event);
  }
}
