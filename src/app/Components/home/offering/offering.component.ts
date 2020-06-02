import { Component, OnInit, Input } from '@angular/core';
import { offers } from './offering.mock';

@Component({
  selector: 'mt-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.scss'],
})
export class OfferingComponent implements OnInit {
  @Input() isMobile: boolean = false;
  baseURL: string = '../../../../assets/img/page/';
  offers: any = [];
  constructor() {}

  ngOnInit(): void {
    this.offers = offers;
  }
}
