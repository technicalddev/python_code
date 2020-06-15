import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  SwiperConfigInterface,
  SwiperNavigationInterface,
} from 'ngx-swiper-wrapper';

import { HomeService } from '../home.service';

@Component({
  selector: 'mt-media-coverage',
  templateUrl: './media-coverage.component.html',
  styleUrls: ['./media-coverage.component.scss'],
})
export class MediaCoverageComponent implements OnInit, OnChanges {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';

  show: boolean = true;
  slides: any = [];
  disabled: boolean = false;
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

  private navigation: SwiperNavigationInterface = {
    nextEl: '.mt-next__btn',
    prevEl: '.mt-prev__btn',
  };

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getMediaCoverage();
  }
  ngOnChanges() {
    const extraConfigs: SwiperConfigInterface = {
      navigation: this.navigation,
      slidesPerView: this.isMobile ? 1 : 4,
    };
    this.config = { ...this.config, ...extraConfigs };
  }

  getMediaCoverage() {
    this.homeService.getMediaCoverage().subscribe((res) => {
      const { data } = res;
      if (data && data.length > 0) {
        this.slides = data;
      }
    });
  }
  onIndexChange(index: number) {
    // console.log('Swiper index: ', index);
  }

  onSwiperEvent(event: string): void {
    // console.log('Swiper event: ', event);
  }

  learnMore(link: string) {
    window.open(`${link}`, '_blank');
  }

  updateUrl(event$: any) {
    event$.target.src = `${this.baseURL}logo/logo.svg`;
  }
}
