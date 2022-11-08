import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TypedFormComponent } from "./typed-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TypedFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class TypedFormModule {}
