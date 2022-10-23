import { Component } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-custom-form-control",
  templateUrl: "./custom-form-control.component.html",
  styleUrls: [
    "./custom-form-control.component.scss",
    "./../shared/styles.scss",
  ],
})
export class CustomFormControlComponent {
  mainForm!: FormGroup;
  public readonly fieldNames = {
    firstname: "firstname",
    lastname: "lastname",
  };

  public get firstname(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.firstname];
  }
  public get lastname(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.lastname];
  }

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group({
      [this.fieldNames.firstname]: [, Validators.required],
      [this.fieldNames.lastname]: [, Validators.required],
    });
  }
  canDeactivate(): boolean {
    return !this.mainForm.dirty;
  }

  submit() {
    if (this.mainForm.invalid) {
      return;
    }
    console.log(this.mainForm.value);
  }
}
