import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedFormComponent } from './nested-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NestedFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class NestedFormModule {}
