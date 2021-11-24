import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Router} from "@angular/router";
import {RelativeRootRouteService} from "../../../shared/relative-root-route.service";

@Component({
  selector: 'katita-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckEmailComponent implements OnInit {

  constructor(protected router: Router, public relativeRoot: RelativeRootRouteService) { }

  ngOnInit(): void {
  }
  createNewPassword(){
    return this.router.navigate(['create-new-password'], { relativeTo: this.relativeRoot.root })
  }

}
