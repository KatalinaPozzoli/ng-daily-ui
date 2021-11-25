import {ComponentFixture, TestBed} from '@angular/core/testing';

import { CreateNewPasswordComponent } from './create-new-password.component';
import {By} from "@angular/platform-browser";
import {Component } from "@angular/core";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

@Component({ template: '' })
class TestComponent {}

describe('CreateNewPasswordComponent', () => {
  let component: CreateNewPasswordComponent;
  let fixture: ComponentFixture<CreateNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewPasswordComponent ],
      imports: [RouterTestingModule.withRoutes([
        { path: 'home', component: TestComponent },
      ])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Visual Composition', ()=>{
    it('should have a title: "Create a new password"', ()=>{
      const title = fixture.debugElement.query(By.css('[data-jest="title"]'))
      expect(title.nativeElement.textContent).toContain("Create a new password")
    })
    it('should have a new password input', ()=>{
      const newPasswordInput = fixture.debugElement.query(By.css('[data-jest="new-password-input"]'))
      expect(newPasswordInput.nativeElement.textContent).toContain("New password")
    })
    it('should have a repeat password input', ()=>{
      const repeatPasswordInput = fixture.debugElement.query(By.css('[data-jest="repeat-password-input"]'))
      expect(repeatPasswordInput.nativeElement.textContent).toContain("Repeat password")
    })
    it('should have a button: "Create"',()=>{
      const createPasswordButton = fixture.debugElement.query(By.css('[data-jest="create-password-button"]'))
      expect(createPasswordButton.nativeElement.textContent).toContain("Create")
    })
  })
  describe('Functional Agreements', ()=>{
    let router: Router;

    beforeEach(() => {
      router = TestBed.inject(Router)
    })

    describe( 'Create new password button', () =>{
      it('should call navigateToHome', () => {
        const createNewPasswordButton = fixture.debugElement.nativeElement.querySelector('[data-jest="create-password-button"]')
        const navigateActionSpy = jest.spyOn(fixture.debugElement.componentInstance, 'navigateToHome')
        createNewPasswordButton.click()
        expect(navigateActionSpy).toHaveBeenCalled()
      })
      it('should trigger the navigation event', () => {
        const createNewPasswordButton = fixture.debugElement.nativeElement.querySelector('[data-jest="create-password-button"]')
        const routerNavigate = jest.spyOn(TestBed.inject(Router), 'navigate')
        createNewPasswordButton.click()
        expect(routerNavigate).toHaveBeenCalledWith(['.'], {relativeTo: null})
      })
    })
  })
});
