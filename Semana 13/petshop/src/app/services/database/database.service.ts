import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atendimento } from '../../models/atendimento.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  private readonly API_URL: string = 'https://residencia-8614e-default-rtdb.firebaseio.com/'

  constructor(private http: HttpClient) { }

  postAtendimento(atendimentoData: {
    especie: string;
    nome: string;
    raca?: string;
    idade: number;
    sexo: string;
    cor: string;
    tutor: string;
    contato: string;
    endereco: string;
    servicoContratado: string;
  }) {
    return this.http.post(`${this.API_URL}/atendimentos.json`, atendimentoData);
  }

  getAtendimentos() {
    return this.http.get<{[key: string]: Atendimento}>(`${this.API_URL}/atendimentos.json`, 
      {
        params: new HttpParams().set('print', 'pretty')
      })
      .pipe(
        map((responseData) => {
          const array: Atendimento[] = [];
          for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)){
              array.push({...(responseData as any)[key], id: key});
            }
          }
          return array;
        })
      )
  }

  getAtendimentoById(atendimentoId: string) {
    return this.http.get<Atendimento>(`${this.API_URL}/atendimentos/${atendimentoId}.json`)
  }

  putAtendimento(atendimentoId: string, atendimentoData: {
    especie: string;
    nome: string;
    raca?: string;
    idade: number;
    sexo: string;
    cor: string;
    tutor: string;
    contato: string;
    endereco: string;
    servicoContratado: string;
  }) {
    return this.http.put(`${this.API_URL}/atendimentos/${atendimentoId}.json`, atendimentoData, { observe: 'response'});
  }

  deleteAtendimento(atendimentoId: string) {
    return this.http.delete(`${this.API_URL}/atendimentos/${atendimentoId}.json`);
  }
}
