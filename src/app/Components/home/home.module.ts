import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from 'src/app/shared/_Modules/angular.material.module';
import { SharedComponentsModule } from 'src/app/shared/_Components/shared.module';
import { InvestorsComponent } from './investors/investors.component';
import { OfferingComponent } from './offering/offering.component';
import { MediaCoverageModule } from '../media-coverage/media-coverage.module';

@NgModule({
  declarations: [HomeComponent, InvestorsComponent, OfferingComponent],
  imports: [
    HomeRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule,
    MediaCoverageModule,
  ],
})
export class HomeModule {}
