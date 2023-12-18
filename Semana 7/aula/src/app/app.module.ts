import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AraraComponent } from './arara/arara.component';
import { FormsModule } from '@angular/forms';
import { LacoRepeticaoDirective } from './laco-repeticao.directive';
import { EstilizacaoPersonalizadaDirective } from './estilizacao-personalizada.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    AraraComponent,
    LacoRepeticaoDirective,
    EstilizacaoPersonalizadaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
