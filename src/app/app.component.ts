import { Component } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mainForm: FormGroup;
  readonly statuses: string[] = ['Regular', 'Short term', 'Part-time'];
  readonly privilegeLevel: string[] = ['Good', 'Middle', 'Junior'];
  public readonly fieldNames = {
    firstname: 'firstname',
    lastname: 'lastname',
    status: 'status',
    password: 'password',
    confirmPassword: 'confirmPassword',
    privilegeLevel: 'privilegeLevel',
    privilegeTitle: 'privilegeTitle',
  };

  readonly formGroups = {
    passwordGroup: 'passwordGroup',
    privileges: 'privileges',
  };

  public get firstname(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.firstname];
  }

  public get lastname(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.lastname];
  }

  public get status(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.status];
  }
  public get password(): AbstractControl {
    return (this.mainForm.controls[this.formGroups.passwordGroup] as FormGroup)
      .controls[this.fieldNames.password];
  }
  public get confirmPassword(): AbstractControl {
    return (this.mainForm.controls[this.formGroups.passwordGroup] as FormGroup)
      .controls[this.fieldNames.confirmPassword];
  }

  public get privileges(): FormArray {
    return this.mainForm.controls[this.formGroups.privileges] as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group({
      [this.fieldNames.firstname]: [null, Validators.required],
      [this.fieldNames.lastname]: [
        null,
        Validators.required,
        this.lastnameValidator(),
      ],
      [this.fieldNames.status]: [this.statuses[1], Validators.required],
      [this.formGroups.privileges]: fb.array([]),

      [this.formGroups.passwordGroup]: this.fb.group(
        {
          [this.fieldNames.password]: [null, Validators.required],
          [this.fieldNames.confirmPassword]: [null, Validators.required],
        },
        {
          validator: this.controlValuesAreEqual(
            this.fieldNames.password,
            this.fieldNames.confirmPassword
          ),
        }
      ),
    });

    this.addPrivilege('driving');
  }

  submit() {
    if (this.mainForm.invalid) {
      return;
    }
    console.log(this.mainForm.value);
  }

  addPrivilege(name: string) {
    var template = this.fb.group({
      [this.fieldNames.privilegeTitle]: [name, Validators.required],
      [this.fieldNames.privilegeLevel]: [
        this.privilegeLevel[1],
        Validators.required,
      ],
    });

    this.privileges.push(template);
  }

  deletePrivilege(index: number) {
    this.privileges.removeAt(index);
  }

  private lastnameExists(username: string): Observable<boolean> {
    const lastnames: string[] = ['Cobold', 'Nest', 'Ogre'];
    return of(lastnames.includes(username)).pipe(delay(2000));
  }

  private lastnameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      this.lastnameExists(control.value).pipe(
        map((x) => (x ? { lastnameExists: true } : null))
      );
  }

  private controlValuesAreEqual(
    primary: string,
    secondary: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const primaryValue = formGroup.get(primary)?.value;
      const secondaryValue = formGroup.get(secondary)?.value;

      return primaryValue === secondaryValue ? null : { passwordEqual: true };
    };
  }
}
