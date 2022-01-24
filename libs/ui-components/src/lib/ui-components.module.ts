import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplifyButtonComponent } from './shared/simplify-button/simplify-button.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SimplifyButtonComponent
  ],
  exports: [
    SimplifyButtonComponent
  ]
})
export class UiComponentsModule {}
