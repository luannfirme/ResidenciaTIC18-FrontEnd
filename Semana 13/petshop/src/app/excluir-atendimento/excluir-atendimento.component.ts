import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-excluir-atendimento',
  templateUrl: './excluir-atendimento.component.html',
  styleUrl: './excluir-atendimento.component.css'
})
export class ExcluirAtendimentoComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
}
