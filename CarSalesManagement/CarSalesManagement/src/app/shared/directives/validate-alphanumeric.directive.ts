import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidateAlphanumeric]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidateAlphanumericDirective, multi: true }]
})
export class ValidateAlphanumericDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && !/^[a-zA-Z0-9]*$/.test(value)) {
      return { alphanumeric: true };
    }
    return null;
  }
}
