import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {Component} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({ template: '' })
class TestComponent {}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [RouterTestingModule.withRoutes([
        {path: 'login', component: TestComponent}
      ])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Visual Composition', () => {
    it('should have a title: "¡Welcome!"', () =>{
      const title = fixture.debugElement.query(By.css('[data-jest=title]'))
      expect(title.nativeElement.textContent).toContain('¡Welcome!')
    })
    it('should have an input: "Name"', () => {
      const nameInput = fixture.debugElement.query(By.css('[data-jest=name-input]'))
      expect(nameInput.nativeElement.textContent).toContain("Name")
    })
    it('should have an input: "User"', () => {
      const userInput = fixture.debugElement.query(By.css('[data-jest=user-input]'))
      expect(userInput.nativeElement.textContent).toContain("User")
    })
    it('should have an input: "Password"', () => {
      const passwordInput = fixture.debugElement.query(By.css('[data-jest=password-input]'))
      expect(passwordInput.nativeElement.textContent).toContain("Password")
    })
    it('should have an input: "Repeat Password"', () => {
      const repeatPasswordInput = fixture.debugElement.query(By.css('[data-jest=repeat-password-input]'))
      expect(repeatPasswordInput.nativeElement.textContent).toContain("Repeat Password")
    })
    it( 'should have a button: "Register"', ()=>{
      const registerButton = fixture.debugElement.query(By.css('[data-jest=register-button]'))
      expect(registerButton.nativeElement.textContent).toContain("Register")
    })
    it('should have a text: "¿Already a member?" ',  () => {
      const logInText = fixture.debugElement.query(By.css('[data-jest=log-in-text]'))
      expect(logInText.nativeElement.textContent).toContain("¿Already a member?")
    });
    it('should have a link: "Log In" ',  () => {
      const logInLink = fixture.debugElement.query(By.css('[data-jest=log-in-link]'))
      expect(logInLink.nativeElement.textContent).toContain("Log In")
    });
  })
  describe('Functional Agreements', ()=>{
    let router: Router;

    beforeEach(() => {
      router = TestBed.inject(Router)
    })

    describe( 'Register button', () =>{
      it('should call navigateToHome', () => {
        const registerButton = fixture.debugElement.query(By.css('[data-jest=register-button]'))
        const navigateActionSpy = jest.spyOn(fixture.debugElement.componentInstance, 'navigateToHome')
        registerButton.nativeElement.click()
        expect(navigateActionSpy).toHaveBeenCalled()
      })
      it('should trigger the navigation event', () => {
        const registerButton = fixture.debugElement.query(By.css('[data-jest=register-button]'))
        const routerNavigate = jest.spyOn(TestBed.inject(Router), 'navigate')
        registerButton.nativeElement.click()
        expect(routerNavigate).toHaveBeenCalledWith(['.'], { relativeTo: null })
      })
    })
    describe('Login Link', () => {
      it('should navigate to /logIn', fakeAsync(() => {
        const logInLink = fixture.debugElement.query(By.css('[data-jest=log-in-link]'))
        logInLink.nativeElement.click()
        tick()
        expect(router.url).toBe('/login')
      }))
    })
  })
});
