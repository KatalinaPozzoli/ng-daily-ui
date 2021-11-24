import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router} from "@angular/router";
import {RelativeRootRouteService} from "../../../shared/relative-root-route.service";

@Component({
  selector: 'katita-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordRecoveryComponent implements OnInit {

  constructor(protected router: Router, public relativeRoot: RelativeRootRouteService) { }

  ngOnInit(): void {
  }
  navigateToCheckEmail(){
    return this.router.navigate(['check-email'], { relativeTo: this.relativeRoot.root })
  }
}
