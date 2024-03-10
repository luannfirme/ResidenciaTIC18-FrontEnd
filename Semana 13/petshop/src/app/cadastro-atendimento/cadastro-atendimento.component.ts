import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrl: './cadastro-atendimento.component.css',
})
export class CadastroAtendimentoComponent implements OnInit {

  atendimentoForm: FormGroup;

  constructor(private dbService: DatabaseService, private toast: NgToastService) {
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
    })
  }

  onSubmit() {
    if (this.atendimentoForm.valid) {
      this.dbService.postAtendimento(this.atendimentoForm.value).subscribe(
        (response) => {
          this.toast.success({ detail: 'Sucesso !!!', summary: 'Atendimento cadastrado com sucesso', sticky: true, position: 'bottomRight', duration: 5000 })
          this.atendimentoForm.reset();
        },
        (error) => {
          this.toast.error({ detail: 'Falha !!!', summary: error, sticky: true, position: 'bottomRight', duration: 5000 })
        }
      );
    } else {
      this.toast.warning({ detail: 'Falha !!!', summary: 'Formulário inválido', sticky: true, position: 'bottomRight', duration: 5000 })
    }
  }

  ngOnInit() {
  }

}