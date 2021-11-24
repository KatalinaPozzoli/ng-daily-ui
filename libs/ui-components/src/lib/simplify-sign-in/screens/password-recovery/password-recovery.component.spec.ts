import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { PasswordRecoveryComponent } from './password-recovery.component';
import {By} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {Component} from "@angular/core";


@Component({ template: '' })
class TestComponent {}

describe('PasswordRecoveryComponent', () => {
  let component: PasswordRecoveryComponent;
  let fixture: ComponentFixture<PasswordRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordRecoveryComponent ],
      imports: [RouterTestingModule.withRoutes([
        {path: 'login', component: TestComponent},
        {path: 'check-email', component: TestComponent}
      ])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Visual Composition', ()=>{
    // it('should have a descriptive image', ()=>{
    //   const descriptiveImage = fixture.debugElement.query(By.css('[data-jest=descriptive-image]'))
    //   expect(descriptiveImage.nativeElement.attributes).toContain('[alt="wrong password image"]')
    // })
    it('should have a title: "Forgot your password?"', () =>{
      const title = fixture.debugElement.query(By.css('[data-jest=title]'))
      expect(title.nativeElement.textContent).toContain('Forgot your password?')
    })
    it('should have a description text: "Enter your registered email below and we’ll send an email with instructions to reseat your password"', ()=>{
      const descriptionText = fixture.debugElement.query(By.css('[data-jest=description-text]'))
      expect(descriptionText.nativeElement.textContent).toContain("Enter your registered email below and we’ll send an email with instructions to reseat your password")
    })
    it('should have an email input: "Enter your email"', ()=>{
      const emailInput = fixture.debugElement.query(By.css('[data-jest=email-input]'))
      expect(emailInput.nativeElement.textContent).toContain("Enter your email")
    })
    it('should have a submit button; "Send me the email"', ()=>{
      const sendMeEmailButton = fixture.debugElement.query(By.css('[data-jest=send-me-email-button]'))
      expect(sendMeEmailButton.nativeElement.textContent).toContain("Send me the email")
    })
    it('should have a back to login Link: "Back to login"', ()=>{
      const backToLoginLink = fixture.debugElement.query(By.css('[data-jest=back-to-login-link]'))
      expect(backToLoginLink.nativeElement.textContent).toContain("Back to login")
    })
  })
  describe('Functional Agreements', ()=>{
    let router: Router;

    beforeEach(() => {
      router = TestBed.inject(Router)
    })

    describe('send me the email button', ()=>{
      it('should call navigateToCheckEmail', () => {
        const sendMeEmailButton = fixture.debugElement.query(By.css('[data-jest=send-me-email-button]'))
        const navigateActionSpy = jest.spyOn(fixture.debugElement.componentInstance, 'navigateToCheckEmail')
        sendMeEmailButton.nativeElement.click()
        expect(navigateActionSpy).toHaveBeenCalled()
      })
      it('should trigger the navigation event', ()=>{
        const sendMeEmailButton = fixture.debugElement.query(By.css('[data-jest=send-me-email-button]'))
        const routerNavigate = jest.spyOn(TestBed.inject(Router), 'navigate')
        sendMeEmailButton.nativeElement.click()
        expect(routerNavigate).toHaveBeenCalledWith(['check-email'], { relativeTo: null })
      })
    })
    describe('back to login link', ()=>{
      it('should trigger the navigation event', fakeAsync(() => {
        const backToLoginLink = fixture.debugElement.query(By.css('[data-jest=back-to-login-link]'))
        backToLoginLink.nativeElement.click()
        tick()
        expect(router.url).toBe('/login')
      }))
    })
  })
});
