import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router} from "@angular/router";
import {RelativeRootRouteService} from "../../../shared/relative-root-route.service";
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {TuiDestroyService, TuiValidationError} from "@taiga-ui/cdk";
import {takeUntil, tap} from "rxjs/operators";

const PasswordPatternValidator = (control: AbstractControl) => {
  const patternValidator: ValidatorFn = Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  const hasError = patternValidator(control)
  return hasError ? {PasswordPattern: new TuiValidationError("Password needs to match pattern. At least one letter and one number. Min 8 characters.")} : null
}

const RequiredWithMessageValidator = (control: AbstractControl) => {
  const hasError = Validators.required(control)
  return hasError ? {RequiredWithMessage: new TuiValidationError('This field is required')} : null
}

const MinLengthValidator = (control: AbstractControl) => {
  const hasError = Validators.minLength(4)(control)
  return hasError ? {MinLengthValidator: new TuiValidationError("Min 4 characters.")} : null
}

const PasswordMatchingValidator = (field_a: string, field_b: string) => {
  return (control: AbstractControl) => {
    const error = {PasswordMatching: new TuiValidationError('The password should match')}
    const root = control.root
    const fieldA = control.root.get(field_a)
    const fieldB = control.root.get(field_b)
    if (!root || !fieldA || !fieldB) return null;
    return fieldA.value !== fieldB.value ? error : null
  }
}

@Component({
  selector: 'katita-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', [RequiredWithMessageValidator, MinLengthValidator]),
    userName: new FormControl('', [RequiredWithMessageValidator, MinLengthValidator]),
    password: new FormControl('', [RequiredWithMessageValidator, PasswordPatternValidator]),
    repeatedPassword: new FormControl('', [RequiredWithMessageValidator, PasswordMatchingValidator('password', 'repeatedPassword')]),
  })

  constructor(protected router: Router, public relativeRoot: RelativeRootRouteService, protected destroy$: TuiDestroyService) {
    this.registerForm.get('password')?.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap((value: string) => {
          if (!value) return;
          this.registerForm.get('repeatedPassword')?.updateValueAndValidity()
        })
      ).subscribe()
  }

  ngOnInit(): void {
  }

  navigateToHome() {
    return this.router.navigate(['.'], {relativeTo: this.relativeRoot.root})
  }
}
