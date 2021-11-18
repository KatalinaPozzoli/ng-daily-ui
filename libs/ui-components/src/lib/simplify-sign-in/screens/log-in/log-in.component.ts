import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RelativeRootRouteService} from "../../../shared/relative-root-route.service";


@Component({
  selector: 'katita-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInComponent implements OnInit {
  logInForm = new FormGroup({
  });
  constructor(protected router: Router, public relativeRoot: RelativeRootRouteService) { }

  ngOnInit(): void {
  }
  navigateToHome(){
    return this.router.navigate(['.'], { relativeTo: this.relativeRoot.root })
  }

}
