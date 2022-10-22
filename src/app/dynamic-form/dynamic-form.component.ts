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
  parsedConfig: IFormConfig[] = [];
  mainForm: FormGroup;
  readonly statuses: string[] = ["Regular", "Short term", "Part-time"];

  public readonly fieldNames = {
    config: "config",
  };

  error: string = "";

  public get config(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.config];
  }

  constructor(private fb: FormBuilder) {
    this.defaultConfig.push(
      {
        "name": "firtname",
        "controlType": "text",
        textDetails: { "placeholder": "Jonny" },
        required: true,
      },
      {
        "name": "lastname",
        "controlType": "text",
        textDetails: { "placeholder": "Bravo" },
      },
      {
        "name": "status",
        "controlType": "select",
        selectDetails: { options: ["Yes", "No", "Other"] },
        required: true,
      }
    );

    this.mainForm = this.fb.group({
      [this.fieldNames.config]: ["", this.validJSONValidator()],
    });

    this.config.valueChanges.subscribe((selectedValue) => {
      if (this.checkIsObject(selectedValue)) {
        this.parsedConfig = JSON.parse(selectedValue);
        for (const field in this.mainForm.controls) {
          if (field == this.fieldNames.config) {
            continue;
          }
          this.mainForm.removeControl(field);
        }

        this.parsedConfig.forEach((x) => {
          const control = this.fb.control(
            x.controlType === "text" ? x.textDetails?.placeholder ?? "" : null
          );

          if (x.required) {
            control.setValidators(Validators.required);
          }
          this.mainForm.addControl(x.name, control);
        });
      }
    });

    this.mainForm.patchValue({
      [this.fieldNames.config]: JSON.stringify(this.defaultConfig),
    });
  }

  private checkIsObject(input: any) {
    try {
      JSON.parse(input);
    } catch (error) {
      return false;
    }
    return true;
  }

  submit() {
    if (this.mainForm.invalid) {
      return;
    }
    console.log(this.mainForm.value);
  }

  private validJSONValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.checkIsObject(control.value) ? null : { validJSON: true };
    };
  }
}
