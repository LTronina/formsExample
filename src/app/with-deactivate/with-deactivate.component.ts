import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";
import { ICanDeactivate } from "../shared/ICanDeactivate";

@Component({
  selector: "app-with-deactivate",
  templateUrl: "./with-deactivate.component.html",
  styleUrls: ["./with-deactivate.component.scss", "./../shared/styles.scss"],
})
export class WithDeactivateComponent implements ICanDeactivate {
  mainForm!: FormGroup;
  public readonly fieldNames = {
    reason: "reason",
  };

  public get reason(): AbstractControl {
    return this.mainForm.controls[this.fieldNames.reason];
  }

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group(
      {
        [this.fieldNames.reason]: [null],
      },
      { updateOn: "change" }
    );
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
