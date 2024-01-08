import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogandoService } from './services/logando.service';
import { HttpClientModule } from '@angular/common/http';
import { AdministradoresComponent } from './administradores/administradores.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    AdministradoresComponent,
    VendedoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
