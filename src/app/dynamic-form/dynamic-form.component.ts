import { Component } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";

import { IFormConfig } from "./dynamic-form.interfaces";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss", "./../shared/styles.scss"],
})
export class DynamicFormComponent {
  defaultConfig: IFormConfig[] = [];
  mainForm: FormGroup;
  readonly statuses: string[] = ["Regular", "Short term", "Part-time"];

  public readonly fieldNames = {
    config: "config",
    lastname: "lastname",
    status: "status",
  };

  readonly formGroups = {
    passwordGroup: "passwordGroup",
    privileges: "privileges",
  };

  public get lastname(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.lastname];
  }

  public get status(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.status];
  }

  constructor(private fb: FormBuilder) {
    console.log(this.defaultConfig);
    this.mainForm = this.fb.group({
      [this.fieldNames.lastname]: [null, Validators.required],
      [this.fieldNames.status]: [this.statuses[1], Validators.required],
    });

    this.defaultConfig.push(
      {
        name: "test",
        type: "text",
        value: "0",
      },
      {
        name: "test",
        type: "select",
        value: "0",
      }
    );
  }

  submit() {
    if (this.mainForm.invalid) {
      return;
    }
    console.log(this.mainForm.value);
  }

  objectChange(input: any) {}
}
