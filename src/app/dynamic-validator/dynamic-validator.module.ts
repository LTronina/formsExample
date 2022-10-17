import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicValidatorComponent } from './dynamic-validator.component';

@NgModule({
  declarations: [DynamicValidatorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class DynamicValidatorModule {}
