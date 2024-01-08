import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogandoService } from './logando.service';

@Injectable({
  providedIn: 'root'
})

export class PrevisaoTempoService {
  private API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: HttpClient, private logando: LogandoService) { }

  getTempo(): Observable<any> {
    this.logando.log('Obtendo previsão do tempo');
    return this.http.get(this.API_URL);
  }

}
