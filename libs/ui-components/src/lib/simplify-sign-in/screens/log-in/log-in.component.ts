import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'katita-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInComponent implements OnInit {
  logInForm = new FormGroup({
  });
  constructor(protected router: Router) { }

  ngOnInit(): void {
  }
  navigateToHome(){
    return this.router.navigate([ 'home'])
  }

}
