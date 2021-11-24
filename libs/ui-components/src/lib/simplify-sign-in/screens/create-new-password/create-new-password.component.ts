import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'katita-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
