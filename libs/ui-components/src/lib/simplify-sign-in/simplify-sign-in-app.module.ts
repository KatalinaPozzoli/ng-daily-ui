import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplifyAppComponent } from './simplify-app/simplify-app.component';
import {RouterModule} from "@angular/router";
import {RelativeRootRouteService} from "../shared/relative-root-route.service";


@NgModule({
  declarations: [
    SimplifyAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SimplifyAppComponent,
        loadChildren: () => import('./screens/screens.module').then(m => m.ScreensModule)
      }
    ])
  ],
  providers: [RelativeRootRouteService]
})
export class SimplifySignInApp { }
