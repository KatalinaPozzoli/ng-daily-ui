import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifyAppComponent } from './simplify-app.component';
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('SimplifyAppComponent', () => {
  let component: SimplifyAppComponent;
  let fixture: ComponentFixture<SimplifyAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplifyAppComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplifyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
