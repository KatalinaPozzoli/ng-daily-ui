import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {TuiRootModule} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'simplify', loadChildren: () => import('@katita/ui-components').then(lib => lib.SimplifySignInApp)}
    ], { initialNavigation: 'enabledBlocking' }),
    TuiRootModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
