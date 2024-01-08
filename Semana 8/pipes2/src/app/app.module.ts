import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { DemoPipe } from './demo.pipe';
import { AbreviaPipe } from './abrevia.pipe';
import { TestePipe } from './teste.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoPipe,
    AbreviaPipe,
    TestePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
