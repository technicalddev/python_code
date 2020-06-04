import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'mt-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit, OnChanges {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';

  clients: any = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getClients();
  }

  ngOnChanges() {}

  getClients() {
    this.homeService.getClientData().subscribe((res) => {
      const { data } = res;
      if (data && data.length > 0) {
        this.clients = data;
      }
    });
  }
}
