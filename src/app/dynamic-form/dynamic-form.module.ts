import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class DynamicFormModule {}
