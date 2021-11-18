import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Router} from "@angular/router";
import {RelativeRootRouteService} from "../../../shared/relative-root-route.service";

@Component({
  selector: 'katita-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  constructor(protected router: Router, public relativeRoot: RelativeRootRouteService) { }

  ngOnInit(): void {
  }
  navigateToHome(){
    return this.router.navigate(['.'], { relativeTo: this.relativeRoot.root })
  }
}
