import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { ListagemAtendimentosComponent } from './listagem-atendimentos/listagem-atendimentos.component';
import { DetalhamentoAtendimentoComponent } from './detalhamento-atendimento/detalhamento-atendimento.component';
import { EdicaoAtendimentoComponent } from './edicao-atendimento/edicao-atendimento.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgToastModule} from 'ng-angular-popup';
import { ExcluirAtendimentoComponent } from './excluir-atendimento/excluir-atendimento.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAtendimentoComponent,
    ListagemAtendimentosComponent,
    DetalhamentoAtendimentoComponent,
    EdicaoAtendimentoComponent,
    HomeComponent,
    ExcluirAtendimentoComponent,
    MainComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    provideFirebaseApp(() => initializeApp({"projectId":"residencia-8614e","appId":"1:537158270080:web:01529410f272ceac0eba65","databaseURL":"https://residencia-8614e-default-rtdb.firebaseio.com","storageBucket":"residencia-8614e.appspot.com","apiKey":"AIzaSyAEu1bIIgG98fMysMjtnP_vDbCrmDSMg-k","authDomain":"residencia-8614e.firebaseapp.com","messagingSenderId":"537158270080","measurementId":"G-V57QY1Y99M"})),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp({"projectId":"residencia-8614e","appId":"1:537158270080:web:01529410f272ceac0eba65","databaseURL":"https://residencia-8614e-default-rtdb.firebaseio.com","storageBucket":"residencia-8614e.appspot.com","apiKey":"AIzaSyAEu1bIIgG98fMysMjtnP_vDbCrmDSMg-k","authDomain":"residencia-8614e.firebaseapp.com","messagingSenderId":"537158270080","measurementId":"G-V57QY1Y99M"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
