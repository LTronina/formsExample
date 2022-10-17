import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UsersModule {}