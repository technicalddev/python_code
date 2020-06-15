import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HomeService } from '../home.service';
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'mt-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss'],
})
export class InvestorsComponent implements OnInit, OnChanges {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';
  investorsList: any = [];

  show: boolean = true;
  slides: any = [];
  disabled: boolean = false;
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: false,
    navigation: true,
    initialSlide: 2,
    breakpoints: {
      400: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1524: {
        slidesPerView: 5,
      },
    },
  };

  private pagination: SwiperPaginationInterface = {
    el: '.mt-inv-pg',
    clickable: true,
    hideOnClick: false,
  };

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getInvestorsData();
  }
  ngOnChanges() {
    const extraConfigs: SwiperConfigInterface = {
      pagination: this.pagination,
    };
    this.config = { ...this.config, ...extraConfigs };
  }
  getInvestorsData() {
    this.homeService.getInvestorsData().subscribe((res) => {
      const { data } = res;
      if (data && data.length > 0) {
        this.investorsList = data;
      }
    });
  }

  onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }

  onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }
}
