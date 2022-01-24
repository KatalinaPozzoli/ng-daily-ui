import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'katita-simplify-button',
  templateUrl: './simplify-button.component.html',
  styleUrls: ['./simplify-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplifyButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
