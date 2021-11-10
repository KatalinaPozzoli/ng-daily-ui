import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifyAppComponent } from './simplify-app.component';

describe('SimplifyAppComponent', () => {
  let component: SimplifyAppComponent;
  let fixture: ComponentFixture<SimplifyAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplifyAppComponent ]
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
