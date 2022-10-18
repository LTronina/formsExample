import { Component, forwardRef, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  AsyncValidatorFn,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormArray,
  FormGroupDirective,
  ControlValueAccessor,
  Validator,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
type ChangeCallbackFn<T> = (value: T) => void;
type TouchCallbackFn = () => void;

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: [
    './adress.component.scss',
    './../../shared/styles.scss',
    './../nested-form.shared.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdressComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AdressComponent),
      multi: true,
    },
  ],
})
export class AdressComponent implements OnInit {
  mainForm!: FormGroup;

  public get street(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.street];
  }

  public get number(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.number];
  }

  readonly formGroups = {
    adress: 'adress',
  };

  readonly fieldNames = {
    street: 'street',
    number: 'number',
    postal: 'postal',
    company: 'company',
  };

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.mainForm = this.fb.group(
      {
        [this.fieldNames.street]: ['', Validators.required],
        [this.fieldNames.number]: [],
        [this.fieldNames.postal]: [],
        [this.fieldNames.company]: [],
      },
      { updateOn: 'change' }
    );

    console.log(this.mainForm.value);
  }

  onTouched: () => void = () => {};

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.mainForm.valid) {
      return null;
    }
    return {
      invalidForm: { valid: false, message: 'addressForm fields are invalid' },
    };
  }

  writeValue(val: any): void {
    if (val) {
      this.mainForm.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: ChangeCallbackFn<object>): void {
    this.mainForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: TouchCallbackFn): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.mainForm.disable();
    } else {
      this.mainForm.enable();
    }
  }
}
