import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({ template: '' })
class LoginTestComponent {}

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      imports: [RouterTestingModule.withRoutes([{ path: 'login', component: LoginTestComponent }])]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Visual Composition', function(){
    it('should have a title: "Welcome to Simplify"', () => {
      const title = fixture.debugElement.nativeElement.querySelector('[data-jest=title]')
      expect(title.textContent).toContain('Welcome to Simplify')
    })
    it('should have a slogan: "Where less is more"', () => {
      const slogan = fixture.debugElement.nativeElement.querySelector('[data-jest=slogan]')
      expect(slogan.textContent).toContain('Where less is more')
    })
    it('should have a button: "Get Started"', () => {
      const startedButton = fixture.debugElement.nativeElement.querySelector('[data-jest=get-started-button]')
      expect(startedButton.textContent).toContain("Get Started")
    })
  })
  describe('Functional Agreements', function () {
    describe('Get Started Button', () => {
      it('should call navigateToLogin', () => {
        const getStartedButton = fixture.debugElement.nativeElement.querySelector('[data-jest=get-started-button]')
        const navigateActionSpy = jest.spyOn(fixture.componentInstance, 'navigateToLogin')
        getStartedButton.click()
        expect(navigateActionSpy).toHaveBeenCalled()
      })
      it('should trigger the navigation event', () => {
        const getStartedButton = fixture.debugElement.nativeElement.querySelector('[data-jest=get-started-button]')
        const routerNavigate = jest.spyOn(TestBed.inject(Router), 'navigate')
        getStartedButton.click()
        expect(routerNavigate).toHaveBeenCalledWith(['/login'])
      })
    })
  });
});
