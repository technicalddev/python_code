import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AngularMaterialModule } from 'src/app/shared/_Modules/angular.material.module';
import { SharedComponentsModule } from 'src/app/shared/_Components/shared.module';

import { HomeComponent } from './home/home.component';
import { InvestorsComponent } from './investors/investors.component';
import { OfferingComponent } from './offering/offering.component';
import { HomeService } from './home.service';
import { ClientsComponent } from './clients/clients.component';
import { ClearDeptComponent } from './clear-dept/clear-dept.component';
import { MediaCoverageComponent } from './media-coverage/media-coverage.component';
import { ContactUsComponent } from './contact/contact-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FormatterModule } from 'src/app/shared/_Modules/formatter/formatter.module';
import { Blogs2Component } from './testimonials/testimonials.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent,
    InvestorsComponent,
    OfferingComponent,
    ClientsComponent,
    ClearDeptComponent,
    MediaCoverageComponent,
    ContactUsComponent,
    BlogsComponent,
    Blogs2Component,
  ],
  imports: [
    HomeRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule,
    SwiperModule,
    FormatterModule,
    TranslateModule,
  ],
  providers: [HomeService],
})
export class HomeModule {}
