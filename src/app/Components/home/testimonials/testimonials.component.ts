import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';
import { clientTestimonials } from './testimonials.mock';

@Component({
  selector: 'mt-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class Blogs2Component implements OnInit, OnChanges {
  @Input() isMobile: boolean = false;
  @Input() hashParam: string = null;
  @Input() baseURL: string = '';
  testimonials: any = [];
  imgErr: boolean = false;
  blogs: any = [];
  show: boolean = true;
  disabled: boolean = false;
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    centeredSlides: true,
    spaceBetween: 40,
    navigation: true,
    loop: false,
    breakpoints: {
      400: {
        initialSlide: 0,
        slidesPerView: 1,
      },
      768: {
        initialSlide: 0,
        slidesPerView: 2,
      },
      1024: {
        initialSlide: 1,
        slidesPerView: 4,
      },
    },
  };

  pagination: SwiperPaginationInterface = {
    el: '.mt-testimonial-dot',
    clickable: true,
    hideOnClick: false,
  };

  ngOnInit(): void {
    this.getTestimonials();
    const extraConfigs: SwiperConfigInterface = {
      pagination: this.pagination,
    };
    this.config = { ...this.config, ...extraConfigs };
  }

  ngOnChanges() {}

  getTestimonials() {
    if (clientTestimonials && clientTestimonials.length > 0) {
      this.testimonials = clientTestimonials;
      console.log('this.testimonials', this.testimonials);
    }
  }
}
