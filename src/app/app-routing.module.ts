import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicValidatorComponent } from './dynamic-validator/dynamic-validator.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'dynamicValidator', component: DynamicValidatorComponent },
  { path: 'nestedForm', component: NestedFormComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
