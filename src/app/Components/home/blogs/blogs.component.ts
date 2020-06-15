import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

import { HomeService } from '../home.service';

@Component({
  selector: 'mt-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit, OnChanges {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';

  show: boolean = true;
  blogs: any = [];
  disabled: boolean = false;
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    centeredSlides: true,
    spaceBetween: 40,
    navigation: true,
    loop: false,
    initialSlide: 1,
    // effect: 'coverflow',
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    //   stopOnLastSlide: true,
    //   waitForTransition: true,
    // },
    breakpoints: {
      400: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  private pagination: SwiperPaginationInterface = {
    el: '.mt-blog-pg',
    clickable: true,
    hideOnClick: false,
  };
  imgErr: boolean = false;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getMediaCoverage();
  }

  ngOnChanges() {
    const extraConfigs: SwiperConfigInterface = {
      slidesPerView: this.isMobile ? 1 : 4,
      pagination: this.pagination,
    };
    this.config = { ...this.config, ...extraConfigs };
  }

  getMediaCoverage() {
    this.homeService.getBlogs().subscribe((res) => {
      const { data } = res;
      if (data && data.length > 0) {
        this.blogs = data;
      }
    });
  }

  onIndexChange(index: number) {
    // console.log('Swiper index: ', index);
  }

  onSwiperEvent(event: string): void {
    // console.log('Swiper event: ', event);
  }
  gotToBlog(link: string) {
    window.open(`${link}`, '_blank');
  }
  updateUrl(event$: any) {
    this.imgErr = true;
    event$.target.src = `${this.baseURL}logo/new-logo.svg`;
  }
}
