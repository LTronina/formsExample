import { Component, forwardRef, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  ControlValueAccessor,
  Validator,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
} from '@angular/forms';

type ChangeCallbackFn<T> = (value: T) => void;
type TouchCallbackFn = () => void;

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: [
    './basic-info.component.scss',
    './../../shared/styles.scss',
    './../nested-form.shared.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true,
    },
  ],
})
export class BasicInfoComponent
  implements OnInit, ControlValueAccessor, Validator
{
  mainForm!: FormGroup;

  public get firstname(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.firstname];
  }

  public get lastname(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.lastname];
  }

  readonly formGroups = {
    basicInfo: 'basicInfo',
  };

  readonly fieldNames = {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    age: 'age',
  };

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.mainForm = this.fb.group(
      {
        [this.fieldNames.firstname]: ['', Validators.required],
        [this.fieldNames.lastname]: ['', Validators.required],
        [this.fieldNames.email]: [],
        [this.fieldNames.age]: [],
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
