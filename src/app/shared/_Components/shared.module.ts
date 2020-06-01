import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../_Modules/angular.material.module';

import { ButtonComponent } from './button/button.component';
import { H1Component } from './typography/h1/h1.component';
import { H2Component } from './typography/h2/h2.component';
import { H3Component } from './typography/h3/h3.component';
import { H4Component } from './typography/h4/h4.component';
import { TextLargeComponent } from './typography/text-large/text-large.component';
import { TextMediumComponent } from './typography/text-medium/text-medium.component';
import { TextSmallComponent } from './typography/text-small/text-small.component';
import { BodyLargeComponent } from './typography/body-large/body-large.component';
import { BodyMediumComponent } from './typography/body-medium/body-medium.component';
import { BodySmallComponent } from './typography/body-small/body-small.component';
import { InputComponent } from './inputs/input/input.component';
import { TextareaComponent } from './inputs/textarea/textarea.component';
import { DropdownComponent } from './inputs/dropdown/dropdown.component';
import { PaginationPageComponent } from './paginator/pagination-page/pagination-page.component';
import { PaginationDotComponent } from './paginator/pagination-dot/pagination-dot.component';
import { LoaderComponent } from './loaders/loader/loader.component';
import { ProgressComponent } from './loaders/progress/progress.component';
import { GhostLoaderComponent } from './loaders/ghost';
import { ModalComponent } from './modal/modal.component';

const commonCompnents = [
  // Button
  ButtonComponent,

  // Typography
  H1Component,
  H2Component,
  H3Component,
  H4Component,
  TextLargeComponent,
  TextMediumComponent,
  TextSmallComponent,
  BodyLargeComponent,
  BodyMediumComponent,
  BodySmallComponent,

  // Input
  InputComponent,
  TextareaComponent,
  DropdownComponent,

  // Pagination
  PaginationPageComponent,
  PaginationDotComponent,

  // Loader
  LoaderComponent,
  ProgressComponent,
  GhostLoaderComponent,

  // Custom Modal to replace Bootstrap Modal
  ModalComponent,
];

@NgModule({
  declarations: commonCompnents,
  imports: [AngularMaterialModule],
  exports: commonCompnents,
})
export class SharedComponentsModule {}
