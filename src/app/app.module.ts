import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ArrayFormModule } from "./array-form/array-form.module";
import { DynamicValidatorModule } from "./dynamic-validator/dynamic-validator.module";
import { NestedFormModule } from "./nested-form/nested-form.module";
import { DynamicFormModule } from "./dynamic-form/dynamic-form.module";
import { JsonPipe } from "@angular/common";
import { WithDeactivateModule } from "./with-deactivate/with-deactivate.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ArrayFormModule,
    AppRoutingModule,
    DynamicValidatorModule,
    NestedFormModule,
    DynamicFormModule,
    WithDeactivateModule,
  ],

  providers: [JsonPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
