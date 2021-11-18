import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogInComponent } from './log-in/log-in.component';
import {TuiInputModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiLinkModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    LogInComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        ScreensRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiLinkModule,
        TuiTextfieldControllerModule,
    ]
})
export class ScreensModule { }
