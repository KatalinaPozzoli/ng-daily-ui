import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RelativeRootRouteService} from "../../../shared/relative-root-route.service";
import {TuiValidationError} from "@taiga-ui/cdk";

// const factory = (...args) => { return () => { /* do something */ } }
// const built = () => { /* do something */ }

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

@Component({
  selector: 'katita-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInComponent implements OnInit {
  logInForm = new FormGroup({
    userName: new FormControl('', [RequiredWithMessageValidator, MinLengthValidator]),
    password: new FormControl('', [RequiredWithMessageValidator, PasswordPatternValidator]),
  });

  constructor(protected router: Router, public relativeRoot: RelativeRootRouteService) {
  }

  ngOnInit(): void {
  }

  navigateToHome() {
    return this.router.navigate(['.'], {relativeTo: this.relativeRoot.root})
  }

}
