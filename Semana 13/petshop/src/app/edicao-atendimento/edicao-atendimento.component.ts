import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edicao-atendimento',
  templateUrl: './edicao-atendimento.component.html',
  styleUrl: './edicao-atendimento.component.css'
})
export class EdicaoAtendimentoComponent implements OnInit {

  atendimentoForm!: FormGroup;
  private atendimentoId: string = '';

  constructor(
    private dbService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: NgToastService,
  ) { }

  ngOnInit(): void {
    this.atendimentoForm = new FormGroup({
      'especie': new FormControl(null, [Validators.required]),
      'nome': new FormControl(null, [Validators.required]),
      'raca': new FormControl(null),
      'idade': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      'sexo': new FormControl(null, [Validators.required]),
      'cor': new FormControl(null, [Validators.required]),
      'tutor': new FormControl(null, [Validators.required]),
      'contato': new FormControl(null, [Validators.required]),
      'endereco': new FormControl(null, [Validators.required]),
      'servicoContratado': new FormControl(null, [Validators.required]),
    });

    this.atendimentoId = this.route.snapshot.paramMap.get('id')!;
    this.dbService.getAtendimentoById(this.atendimentoId).subscribe(
      (response) => {
        const atendimento = response;
        atendimento.raca = atendimento.raca || '';
        this.atendimentoForm.setValue(atendimento);
      },
      (error) => {
        this.toast.error({ detail: 'Falha !!!', summary: error, sticky: true, position: 'bottomRight', duration: 5000 });
        setTimeout(() => {
          this.router.navigate(['/main/listar']);
        })
      }
    )
  }

  onSubmit() {
    if (this.atendimentoForm.valid) {
      this.dbService.putAtendimento(this.atendimentoId, this.atendimentoForm.value).subscribe(
        (response) => {
          this.toast.success({ detail: 'Sucesso !!!', summary: 'Atendimento atualizado com sucesso', sticky: true, position: 'bottomRight', duration: 5000 })
          setTimeout(() => {
            this.router.navigate(['listar']);
          }, 1000)
        },
        (error) => {
          this.toast.error({ detail: 'Falha !!!', summary: error, sticky: true, position: 'bottomRight', duration: 5000 })
        }
      );
    } else {
      this.toast.warning({ detail: 'Falha !!!', summary: 'Formulário inválido', sticky: true, position: 'bottomRight', duration: 5000 })
    }
  }
}