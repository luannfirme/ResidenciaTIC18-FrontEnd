import { Component, OnInit } from '@angular/core';
import { Atendimento } from '../models/atendimento.model';
import { DatabaseService } from '../services/database/database.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { ExcluirAtendimentoComponent } from '../excluir-atendimento/excluir-atendimento.component';

@Component({
  selector: 'app-listagem-atendimentos',
  templateUrl: './listagem-atendimentos.component.html',
  styleUrl: './listagem-atendimentos.component.css'
})
export class ListagemAtendimentosComponent implements OnInit {

  listaAtendimentos: Atendimento[] = [];

  constructor(
    private dbService: DatabaseService,
    private toast: NgToastService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.dbService.getAtendimentos().subscribe(
      (response) => {
        this.listaAtendimentos = response;
      },
      (error) => {
        this.toast.error({ detail: 'Falha !!!', summary: error, sticky: true, position: 'bottomRight', duration: 5000 });
        setTimeout(() => {
          this.router.navigate(['']);
        })
      })
    this.dbService.getAtendimentos().subscribe(atendimentoList => {
      this.listaAtendimentos = atendimentoList;
    })
  }

  openConfirmModal(atendimentoId: string) {
    const modalRef = this.modalService.open(ExcluirAtendimentoComponent); // Abre o modal
    modalRef.componentInstance.atendimentoId = atendimentoId; // Passa o ID do atendimento para o modal
    modalRef.result.then((result) => { // Captura o resultado do modal
      if (result === 'Confirm click') {
        this.deleteAtendimento(atendimentoId); // Chama o método para excluir o atendimento
      }
    });
  }

  deleteAtendimento(atendimentoId: string) {
    this.dbService.deleteAtendimento(atendimentoId).subscribe(
      (response) => {
        const index = this.listaAtendimentos.findIndex(a => a.id === atendimentoId);
        if (index !== -1) {
          this.listaAtendimentos.splice(index, 1);
        }
        this.toast.success({ detail: 'Sucesso !!!', summary: 'Atendimento excluído com sucesso', sticky: true, position: 'bottomRight', duration: 5000 })
      },
      (error) => {
        this.toast.error({ detail: 'Falha !!!', summary: error, sticky: true, position: 'bottomRight', duration: 5000 })
      }
    );
  }
}
