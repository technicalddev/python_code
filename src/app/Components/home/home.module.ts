import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from 'src/app/shared/_Modules/angular.material.module';
import { SharedComponentsModule } from 'src/app/shared/_Components/shared.module';
import { InvestorsComponent } from './investors/investors.component';
import { OfferingComponent } from './offering/offering.component';
import { MediaCoverageModule } from '../media-coverage/media-coverage.module';
import { HomeService } from './home.service';
import { ClientsComponent } from './clients/clients.component';
import { ClearDeptComponent } from './clear-dept/clear-dept.component';

@NgModule({
  declarations: [
    HomeComponent,
    InvestorsComponent,
    OfferingComponent,
    ClientsComponent,
    ClearDeptComponent,
  ],
  imports: [
    HomeRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule,
    MediaCoverageModule,
  ],
  providers: [HomeService],
})
export class HomeModule {}
