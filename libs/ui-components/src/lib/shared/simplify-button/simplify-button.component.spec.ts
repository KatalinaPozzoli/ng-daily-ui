import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifyButtonComponent } from './simplify-button.component';

describe('SimplifyButtonComponent', () => {
  let component: SimplifyButtonComponent;
  let fixture: ComponentFixture<SimplifyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplifyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplifyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
