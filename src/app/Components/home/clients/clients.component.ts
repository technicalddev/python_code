import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HomeService } from '../home.service';
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'mt-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit, OnChanges {
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
    spaceBetween: 40,
    loop: false,
    navigation: true,
    // effect: 'coverflow',
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      waitForTransition: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1627: {
        slidesPerView: 4,
      },
    },
  };

  private pagination: SwiperPaginationInterface = {
    el: '.mt-client-pg',
    clickable: true,
    hideOnClick: false,
  };

  clients: any = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getClients();
  }

  ngOnChanges() {
    const extraConfigs: SwiperConfigInterface = {
      pagination: this.pagination,
    };
    this.config = { ...this.config, ...extraConfigs };
  }

  getClients() {
    this.homeService.getClientData().subscribe((res) => {
      const { data } = res;
      if (data && data.length > 0) {
        this.clients = data;
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
