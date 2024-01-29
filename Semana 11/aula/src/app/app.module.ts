import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModelDrivenComponent } from './form-model-driven/form-model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateDrivenComponent,
    FormModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
