import { Component } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-dynamic-validator",
  templateUrl: "./dynamic-validator.component.html",
  styleUrls: ["./dynamic-validator.component.scss", "./../shared/styles.scss"],
})
export class DynamicValidatorComponent {
  mainForm: FormGroup;
  readonly statuses: string[] = ["Regular", "Short term", "Other"];

  public readonly fieldNames = {
    reason: "reason",

    status: "status",
  };

  public get status(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.status];
  }

  public get reason(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.reason];
  }

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group(
      {
        [this.fieldNames.status]: [this.statuses[1], Validators.required],
        [this.fieldNames.reason]: [null],
      },
      { updateOn: "change" }
    );

    this.status?.valueChanges.subscribe((x) => {
      if (x === this.statuses[2]) {
        this.reason?.setValidators(Validators.required);
      } else {
        this.reason?.clearValidators();
      }
      this.reason?.updateValueAndValidity();
    });
  }

  submit() {
    if (this.mainForm.invalid) {
      return;
    }
    console.log(this.mainForm.value);
  }
}
