import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  AsyncValidatorFn,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fg: FormGroup;
  readonly statuses: string[] = ['Dostępny', 'Niedostępny', 'Nieznany'];
  readonly fieldNames = {
    firstname: 'firstname',
    lastname: 'lastname',
    status: 'status',
  };

  public get firstname(): AbstractControl {
    return this.fg.controls[this.fieldNames.firstname];
  }

  public get lastname(): AbstractControl {
    return this.fg.controls[this.fieldNames.lastname];
  }

  public get status(): AbstractControl {
    return this.fg.controls[this.fieldNames.status];
  }

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group(
      {
        firstname: [null, Validators.required],
        lastname: [null, Validators.required, this.lastnameValidator()],

        status: [this.statuses[1], Validators.required],
      },
      { updateOn: 'change' }
    );
  }

  submit() {
    if (this.fg.invalid) {
      return;
    }
    console.log(this.fg.value);
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
}
