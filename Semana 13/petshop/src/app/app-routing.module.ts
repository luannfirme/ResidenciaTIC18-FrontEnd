import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagemAtendimentosComponent } from './listagem-atendimentos/listagem-atendimentos.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { EdicaoAtendimentoComponent } from './edicao-atendimento/edicao-atendimento.component';
import { DetalhamentoAtendimentoComponent } from './detalhamento-atendimento/detalhamento-atendimento.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AuthGuard } from './services/guards/auth.guard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
    { path: 'home', component: HomeComponent },
    { path: 'listar', component: ListagemAtendimentosComponent },
    { path: 'cadastrar', component: CadastroAtendimentoComponent },
    { path: 'editar/:id', component: EdicaoAtendimentoComponent },
    { path: 'visualizar/:id', component: DetalhamentoAtendimentoComponent },
  ]},
  {path:'login',component:LoginComponent},
  {path:'registrar',component:RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
