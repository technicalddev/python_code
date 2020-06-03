import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';

import { MediaCoverageService } from '../media-coverage.service';
import swiper from 'swiper';

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

  type: string = 'component';

  disabled: boolean = false;
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    centeredSlides: true,
    spaceBetween: 40,
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  @ViewChild('swiperContainer') swiper: swiper;

  constructor(private mediaService: MediaCoverageService) {}

  ngOnInit(): void {
    this.getMediaCoverage();
  }
  ngOnChanges() {
    const extraConfigs: SwiperConfigInterface = {
      navigation: this.isMobile ? true : false,
      slidesPerView: this.isMobile ? 1 : 4,
      loop: this.isMobile ? false : true,
    };
    this.config = { ...this.config, ...extraConfigs };
  }

  getMediaCoverage() {
    this.mediaService.getMediaCoverage().subscribe((res) => {
      const { data } = res;
      if (data && data.length > 0) {
        this.slides = data;
      }
    });
  }
  onNext($event: boolean) {
    if ($event) this.swiper.slideNext();
    else if (!$event) this.swiper.slidePrev();
    console.log('button clicked');
  }
  onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }

  onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }
}
