import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Formatter } from './formatter-pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [Formatter],
  providers: [],
  exports: [Formatter],
})
export class FormatterModule {}
