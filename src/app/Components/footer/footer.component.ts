import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { ScrollService } from 'src/app/shared/_Services/scroll.service';

@Component({
  selector: 'mt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  logoSection: any = {};
  quickLinks: any = [];
  companyLinks: any = [];
  showModal: boolean = false;
  modalData: any = {};
  modalBtns: any = [{ label: 'Ok', class: '', submit: true }];
  constructor(
    private footerService: FooterService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.getFooterData();
  }
  getFooterData() {
    this.footerService.getFooterData().subscribe((res) => {
      const { logoSection, quickLinks, companyLinks } = res;
      this.logoSection = logoSection;
      this.quickLinks = quickLinks;
      this.companyLinks = companyLinks;
    });
  }

  onLinksAction(links: any) {
    const { name, value, type } = links;
    console.log('val', value);
    if (type === 'page') {
      this.scrollService.scrollToElementById(value);
    }
    if (type === 'email') {
      window.open(`mailto:${value}`, '_blank');
      return;
    }
    if (type === 'phone') {
      location.href = `tel:${value}`;
      return;
    }
    if (type === 'map') {
      window.open(
        `https://www.google.com/maps/place/?q=${value ? value : name}`,
        '_blank'
      );
      return;
    }
    if (type === 'modal') {
      this.modalData = {
        header: name,
        body: value,
      };
      console.log('modal data', this.modalData);
      this.showModal = true;
      return;
    }
  }
  onModalAction($event: boolean) {
    this.showModal = false;
    return;
  }
}
