import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RelativeRootRouteService {
  private source$: BehaviorSubject<ActivatedRoute | null> = new BehaviorSubject<ActivatedRoute | null>(null);
  constructor() {

  }
  public get root(): ActivatedRoute | null {
    return this.source$.value
  }
  public root$: Observable<ActivatedRoute | null> = this.source$.asObservable()

  setSource(value: ActivatedRoute){
    this.source$.next(value)
  }
}
