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
export class OfferingComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';
  offers: any = [];
  show: boolean = true;

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
  }

  ngOnchages() {
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
  buttonAction() {
    this.scrollService.scrollToElementById('reachus');
  }

  onIndexChange(index: number) {
    // console.log('Swiper index: ', index);
  }

  onSwiperEvent(event: string): void {
    // console.log('Swiper event: ', event);
  }
}
