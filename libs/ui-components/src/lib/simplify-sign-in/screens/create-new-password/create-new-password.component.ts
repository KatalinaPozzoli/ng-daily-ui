import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Router} from "@angular/router";
import {RelativeRootRouteService} from "../../../shared/relative-root-route.service";

@Component({
  selector: 'katita-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewPasswordComponent implements OnInit {

  constructor(protected router: Router, public relativeRoot: RelativeRootRouteService) { }

  ngOnInit(): void {
  }
  navigateToHome(){
    return this.router.navigate(['.'], { relativeTo: this.relativeRoot.root })
  }

}
