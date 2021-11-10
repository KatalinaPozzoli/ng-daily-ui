import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import {Router} from "@angular/router";
import {Component} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

@Component({ template: '' })
class HomeTestComponent {}

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogInComponent],
      imports: [RouterTestingModule.withRoutes([{ path: 'home', component: HomeTestComponent }])]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Visual Composition', function () {
    it('should have a title: "¡Hi there!"', () => {
      const title = fixture.debugElement.nativeElement.querySelector('[data-jest=title]')
      expect(title.textContent).toContain('¡Hi there!')
    })
    it('should have a subtitle: "Welcome back"', () => {
      const subtitle = fixture.debugElement.nativeElement.querySelector('[data-jest=subtitle]')
      expect(subtitle.textContent).toContain('Welcome back')
    })
    it('should have an input: "User"', () => {
      const userInput = fixture.debugElement.nativeElement.querySelector('[data-jest=user-input]')
      expect(userInput.textContent).toContain("User")
    })
    it('should have an input: "Password"', () => {
      const passwordInput = fixture.debugElement.nativeElement.querySelector('[data-jest=password-input]')
      expect(passwordInput.textContent).toContain("Password")
    })
    it('should have a link: "¿Forgot password?"', () => {
      const forgotPasswordLink = fixture.debugElement.nativeElement.querySelector('[data-jest=forgot-password-link]')
      expect(forgotPasswordLink.textContent).toContain("¿Forgot password?")
    })
    it('should have a button: "Log In" ', () => {
      const logInButton = fixture.debugElement.nativeElement.querySelector('[data-jest=log-in-button]')
      expect(logInButton.textContent).toContain("Log In")
    });
    it('should have a text: "¿Don’t have an account?"', () => {
      const registerText = fixture.debugElement.nativeElement.querySelector('[data-jest=register-text]')
      expect(registerText.textContent).toContain("¿Don’t have an account?")
    });
    it('should have a link: "Register"', () => {
      const registerLink = fixture.debugElement.nativeElement.querySelector('[data-jest=register-link]')
      expect(registerLink.textContent).toContain("Register")
    })
  })
  describe('Functional Agreements', function () {
    describe( 'Log In button', () =>{
      it('should call navigateToHome', () => {
        const logInButton = fixture.debugElement.nativeElement.querySelector('[data-jest=log-in-button]')
        const navigateActionSpy = jest.spyOn(fixture.debugElement.componentInstance, 'navigateToHome')
        logInButton.click()
        expect(navigateActionSpy).toHaveBeenCalled()
      })
      it('should trigger the navigation event', () => {
        const logInButton = fixture.debugElement.nativeElement.querySelector('[data-jest=log-in-button]')
        const routerNavigate = jest.spyOn(TestBed.inject(Router), 'navigate')
        logInButton.click()
        expect(routerNavigate).toHaveBeenCalledWith(['home'])
      })
    })
    /*describe('Forgot Password Link', () => {
      it( 'should trigger the navigation event', () => {
        const forgotPasswordLink = fixture.debugElement.nativeElement.querySelector('[data-jest=forgot-password-link]')
        const routerNavigate = jest.spyOn(TestBed.inject(Router), 'navigate')
        forgotPasswordLink.routerLink
        expect(routerNavigate).toHaveBeenCalledWith('recover-password')
      })
    })*/
  })
})
