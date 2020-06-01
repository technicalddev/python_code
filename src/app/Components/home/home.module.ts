import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from 'src/app/shared/_Modules/angular.material.module';
import { SharedComponentsModule } from 'src/app/shared/_Components/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule,
  ],
})
export class HomeModule {}
