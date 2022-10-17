import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { DynamicValidatorModule } from './dynamic-validator/dynamic-validator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    DynamicValidatorModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
