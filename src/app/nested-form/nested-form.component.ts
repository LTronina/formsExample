import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  AsyncValidatorFn,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormArray,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss', './../shared/styles.scss'],
})
export class NestedFormComponent {
  mainForm: FormGroup;

  readonly formGroups = {
    passwordGroup: 'adress',
  };

  readonly fieldNames = {
    firstname: 'firstname',
    lastname: 'lastname',
  };

  public get firstname(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.firstname];
  }
  public get lastname(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.lastname];
  }

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group(
      {
        [this.fieldNames.firstname]: ['', Validators.required],
        [this.fieldNames.lastname]: ['', Validators.required],
      },
      { updateOn: 'change' }
    );
  }

  submit() {
    if (this.mainForm.invalid) {
      return;
    }
    console.log(this.mainForm.value);
  }
}
