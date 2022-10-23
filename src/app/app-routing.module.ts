import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { DynamicValidatorComponent } from "./dynamic-validator/dynamic-validator.component";
import { NestedFormComponent } from "./nested-form/nested-form.component";
import { ArrayFormComponent } from "./array-form/array-form.component";
import { WithDeactivateComponent } from "./with-deactivate/with-deactivate.component";
import { GenericDeactivateGuard } from "./shared/generic-deactivate.guard";

const routes: Routes = [
  { path: "users", component: ArrayFormComponent },
  { path: "dynamicValidator", component: DynamicValidatorComponent },
  { path: "nestedForm", component: NestedFormComponent },
  { path: "dynamicForm", component: DynamicFormComponent },
  {
    path: "withDeactivateForm",
    component: WithDeactivateComponent,
    canDeactivate: [GenericDeactivateGuard],
  },
  { path: "", redirectTo: "/users", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
