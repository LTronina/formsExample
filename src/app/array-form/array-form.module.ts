import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrayFormComponent } from './array-form.component';

@NgModule({
  declarations: [ArrayFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ArrayFormModule {}
