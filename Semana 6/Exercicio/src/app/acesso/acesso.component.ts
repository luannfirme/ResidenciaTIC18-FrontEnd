import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  listaDePermissao: string[] = ['admin', 'root', 'visitante'];
  permissao: string = '';

  public onLogando(event: Event){
    this.permissao = (<HTMLInputElement>event.target).value;

  }
}
