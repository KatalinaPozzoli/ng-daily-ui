import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RelativeRootRouteService} from "../../shared/relative-root-route.service";

@Component({
  selector: 'katita-simplify-app',
  templateUrl: './simplify-app.component.html',
  styleUrls: ['./simplify-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplifyAppComponent implements OnInit {

  constructor(protected route: ActivatedRoute, protected relativeRoot: RelativeRootRouteService) {
    this.relativeRoot.next(route.parent || this.route)
  }

  ngOnInit(): void {
  }

}
