import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagemAtendimentosComponent } from './listagem-atendimentos/listagem-atendimentos.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { EdicaoAtendimentoComponent } from './edicao-atendimento/edicao-atendimento.component';
import { DetalhamentoAtendimentoComponent } from './detalhamento-atendimento/detalhamento-atendimento.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'listar',component:ListagemAtendimentosComponent},
  {path:'cadastrar',component:CadastroAtendimentoComponent},
  {path:'editar/:id',component:EdicaoAtendimentoComponent},
  {path:'visualizar/:id',component:DetalhamentoAtendimentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
