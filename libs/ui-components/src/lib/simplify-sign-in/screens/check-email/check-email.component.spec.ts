import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { CheckEmailComponent } from './check-email.component';
import {Component} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {By} from "@angular/platform-browser";

@Component({ template: '' })
class TestComponent {}

describe('CheckEmailComponent', () => {
  let component: CheckEmailComponent;
  let fixture: ComponentFixture<CheckEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckEmailComponent ],
      imports: [RouterTestingModule.withRoutes([
        {path: 'password-recovery', component: TestComponent}
      ])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Visual Composition', ()=>{
    it('should have a title: "Check your email"', ()=>{
      const title = fixture.debugElement.query(By.css('[data-jest="title"]'))
      expect(title.nativeElement.textContent).toContain("Check your email")
    })
    it('should have a description text: "We have sent a password recovery instructions to your email "', ()=>{
      const descriptionText = fixture.debugElement.query(By.css('[data-jest="description-text"]'))
      expect(descriptionText.nativeElement.textContent).toContain("We have sent a password recovery instructions to your email ")
    })
    it('should have a button: "Go it!"',()=>{
      const goItButton = fixture.debugElement.query(By.css('[data-jest="go-it-button"]'))
      expect(goItButton.nativeElement.textContent).toContain("Go It!")
    })
    it('should have a bottom text', ()=>{
      const bottomText = fixture.debugElement.query(By.css('[data-jest="bottom-text"]'))
      expect(bottomText.nativeElement.textContent).toContain("Did not received the email? Check your spam filter or ")
    })
    it('should have a back to password recovery link', ()=>{
      const backToPasswordLink = fixture.debugElement.query(By.css('[data-jest="back-to-password-link"]'))
      expect(backToPasswordLink.nativeElement.textContent).toContain("try with another email address")
    })
  })
  describe('Functional Agreements', ()=>{
    let router: Router;

    beforeEach(() => {
      router = TestBed.inject(Router)
    })
    describe('go it button', ()=>{
      it('should call to createNewPassword ',  () => {
        const goItButton = fixture.debugElement.query(By.css('[data-jest="go-it-button"]'))
        const navigateActionSpy = jest.spyOn(fixture.debugElement.componentInstance, 'createNewPassword')
        goItButton.nativeElement.click()
        expect(navigateActionSpy).toHaveBeenCalled()
      });
      it('should trigger the navigation event  ',  () => {
        const goItButton = fixture.debugElement.query(By.css('[data-jest="go-it-button"]'))
        const routerNavigate = jest.spyOn(TestBed.inject(Router), 'navigate')
        goItButton.nativeElement.click()
        expect(routerNavigate).toHaveBeenCalledWith(['create-new-password'], {relativeTo: null})
      });
    })
    describe('another email link', ()=>{
      it('should trigger the navigation event', fakeAsync(() => {
        const backToPasswordRecoveryLink = fixture.debugElement.query(By.css('[data-jest="back-to-password-link"]'))
        backToPasswordRecoveryLink.nativeElement.click()
        tick()
        expect(router.url).toBe('/password-recovery')
      }))
    })

  })
});
