import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RegisterComponent} from "./register/register.component";
import {PasswordRecoveryComponent} from "./password-recovery/password-recovery.component";
import {CheckEmailComponent} from "./check-email/check-email.component";
import {CreateNewPasswordComponent} from "./create-new-password/create-new-password.component";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LogInComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'password-recovery', component: PasswordRecoveryComponent},
  {path: 'check-email', component: CheckEmailComponent},
  {path: 'create-new-password', component: CreateNewPasswordComponent},
  { path: '', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
