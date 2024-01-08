import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LogandoService {
  private chamadas: number = 0;

  constructor() { }

  log(message: string) {
    console.log(message);
    this.chamadas++;
  }

  public getChamadas(): number {
    return this.chamadas;
  }
}
