import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomFormControlComponent } from "./custom-form-control.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";

@NgModule({
  declarations: [CustomFormControlComponent, CustomInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CustomFormControlModule {}
