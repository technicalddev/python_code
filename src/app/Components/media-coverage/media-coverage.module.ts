import { NgModule } from '@angular/core';

import { MediaCoverageRoutingModule } from './media-coverage-routing.module';
import { MediaCoverageComponent } from './media/media-coverage.component';
import { AngularMaterialModule } from 'src/app/shared/_Modules/angular.material.module';
import { SharedComponentsModule } from 'src/app/shared/_Components/shared.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MediaCoverageService } from './media-coverage.service';

@NgModule({
  declarations: [MediaCoverageComponent],
  imports: [
    MediaCoverageRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule,
    SwiperModule,
  ],
  exports: [MediaCoverageComponent],
  providers: [MediaCoverageService],
})
export class MediaCoverageModule {}
