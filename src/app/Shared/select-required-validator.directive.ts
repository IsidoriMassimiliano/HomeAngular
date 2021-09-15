import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
// Import input from @angular/core package
import { Directive, Input } from '@angular/core';


@Directive({
    selector: '[appSelectValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator {
    // Create input property to receive the
    // specified default option value
    // Create input property to receive the
    // specified default option value
    @Input()
    appSelectValidator!: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        // Remove the hard-coded value and use the input property instead
        return control.value === this.appSelectValidator ?
                                    { 'defaultSelected': true } : null;
    }
}