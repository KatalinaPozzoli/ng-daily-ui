import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LogInComponent} from "./log-in/log-in.component";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LogInComponent },
  { path: '', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
