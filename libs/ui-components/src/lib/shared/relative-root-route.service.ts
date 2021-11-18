import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RelativeRootRouteService extends BehaviorSubject<ActivatedRoute>{
  public get root(): ActivatedRoute {
    return this.value
  }
  public root$: Observable<ActivatedRoute> = this.asObservable()
}
