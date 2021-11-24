import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import {Router} from "@angular/router";
import {Component, DebugElement} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";
import {RegisterComponent} from "../register/register.component";

@Component({ template: '' })
class TestComponent {}

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogInComponent],
      imports: [RouterTestingModule.withRoutes([
        { path: 'home', component: TestComponent },
        { path: 'password-recovery', component: TestComponent },
        { path: 'register', component: RegisterComponent }
      ])]
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
    let router: Router;

    beforeEach(() => {
      router = TestBed.inject(Router)
    })

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
        expect(routerNavigate).toHaveBeenCalledWith(['.'], {relativeTo: null})
      })
    })
    describe('Forgot Password Link', () => {
      it( 'should trigger the navigation event', fakeAsync(() => {
        const forgotPasswordLink: DebugElement = fixture.debugElement.query(By.css('[data-jest=forgot-password-link]'))
        forgotPasswordLink.nativeElement.click()
        tick();
        expect(router.url).toBe(`/password-recovery`)
      }))
    })
    describe('Register Link', () => {
      it('should navigate to /register', fakeAsync(() => {
        const registerLink = fixture.debugElement.query(By.css('[data-jest=register-link]'))
        registerLink.nativeElement.click()
        tick()
        expect(router.url).toBe('/register')
      }))
    })
  })
})
