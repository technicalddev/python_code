import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaCoverageRoutingModule } from './media-coverage-routing.module';
import { MediaCoverageComponent } from './media/media-coverage.component';
import { AngularMaterialModule } from 'src/app/shared/_Modules/angular.material.module';
import { SharedComponentsModule } from 'src/app/shared/_Components/shared.module';

@NgModule({
  declarations: [MediaCoverageComponent],
  imports: [
    MediaCoverageRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule,
  ],
  exports: [MediaCoverageComponent],
})
export class MediaCoverageModule {}
