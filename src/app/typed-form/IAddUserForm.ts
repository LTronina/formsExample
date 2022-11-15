import { FormControl, FormGroup } from "@angular/forms";

export const sexTypes = ["male", "female"] as const;
export type sexType = typeof sexTypes[number];

export interface IAddUserForm extends FormGroup<IAddUserFormFields> {}

export interface IAddUserFormFields {
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  age: FormControl<number>;
  sex: FormControl<sexType>;
}
