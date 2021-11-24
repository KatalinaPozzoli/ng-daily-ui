import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPasswordComponent } from './create-new-password.component';
import {By} from "@angular/platform-browser";

describe('CreateNewPasswordComponent', () => {
  let component: CreateNewPasswordComponent;
  let fixture: ComponentFixture<CreateNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewPasswordComponent ]
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
      expect(repeatPasswordInput.nativeElement.textContent).toContain("New password")
    })
    it('should have a description text: "Remember that you new password must be different from previously used password"', ()=>{
      const descriptionText = fixture.debugElement.query(By.css('[data-jest="description-text"]'))
      expect(descriptionText.nativeElement.textContent).toContain("Remember that you new password must be different from previously used password" )
    })
    it('should have a button: "Create"',()=>{
      const createPasswordButton = fixture.debugElement.query(By.css('[data-jest="create-password-button"]'))
      expect(createPasswordButton.nativeElement.textContent).toContain("Create")
    })
  })
  describe('Functional Agreements', ()=>{})
});
