import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'mt-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.scss'],
})
export class OfferingComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';
  offers: any = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getOffersData();
  }
  getOffersData() {
    this.homeService.getOffersData().subscribe((res) => {
      const { data } = res;
      if (data && data.length > 0) {
        this.offers = data;
      }
    });
  }
}
