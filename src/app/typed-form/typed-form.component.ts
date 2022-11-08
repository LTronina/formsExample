import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { fields } from "../shared/functions";

import { IAddUserForm, sexType, sexTypes } from "./IAddUserForm";

@Component({
  selector: "app-typed-form",
  templateUrl: "./typed-form.component.html",
  styleUrls: ["./typed-form.component.scss", "./../shared/styles.scss"],
})
export class TypedFormComponent {
  mainForm!: IAddUserForm;
  sexTypes = sexTypes;

  onSubmit() {
    //   throw new Error("Method not implemented.");
  }
  reset() {
    // throw new Error("Method not implemented.");
  }

  public get firstname(): AbstractControl {
    return this.mainForm.controls.firstname;
  }
  public get lastname(): AbstractControl {
    return this.mainForm.controls.lastname;
  }

  public get age(): AbstractControl {
    return this.mainForm.controls.age;
  }

  public get sex(): AbstractControl {
    return this.mainForm.controls.sex;
  }

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.nonNullable.group({
      firstname: this.fb.nonNullable.control("", [Validators.required]),
      lastname: this.fb.nonNullable.control("", [Validators.required]),
      age: this.fb.nonNullable.control(0, [Validators.required]),
      sex: this.fb.nonNullable.control<sexType>("male", [Validators.required]),
    });
  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
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
