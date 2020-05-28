import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AngularMaterialModule } from './Shared/_Modules/angular.material.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'moneytorApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
