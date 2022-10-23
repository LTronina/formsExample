import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WithDeactivateComponent } from "./with-deactivate.component";

@NgModule({
  declarations: [WithDeactivateComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class WithDeactivateModule {}
