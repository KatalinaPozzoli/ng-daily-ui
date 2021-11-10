import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'katita-simplify-app',
  templateUrl: './simplify-app.component.html',
  styleUrls: ['./simplify-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplifyAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
