import { Component, OnInit } from '@angular/core';
import { Atendimento } from '../models/atendimento.model';
import { DatabaseService } from '../services/database/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-detalhamento-atendimento',
  templateUrl: './detalhamento-atendimento.component.html',
  styleUrl: './detalhamento-atendimento.component.css'
})
export class DetalhamentoAtendimentoComponent implements OnInit {

  atendimento: Atendimento | undefined;

  constructor(
    private route: ActivatedRoute,
    private dbService: DatabaseService,
    private toast: NgToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const atendimentoId = this.route.snapshot.params['id'];
    this.dbService.getAtendimentoById(atendimentoId).subscribe(
      (response) => {
        this.atendimento = response;
      },
      (error) => {
        this.toast.error({ detail: 'Falha !!!', summary: error, sticky: true, position: 'bottomRight', duration: 5000 });
        setTimeout(() => {
          this.router.navigate(['/main/listar']);
        })
      }
    )
  }
}