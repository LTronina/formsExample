import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedFormComponent } from './nested-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AdressComponent } from './adress/adress.component';

@NgModule({
  declarations: [NestedFormComponent, BasicInfoComponent, AdressComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class NestedFormModule {}
