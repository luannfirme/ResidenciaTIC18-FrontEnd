import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent implements OnInit {
  temperaturaAtual: string = '';
  descricaoTempoAtual: string = '';
  tempMaximaHoje: string = '';
  tempMinimaHoje: string = '';

  constructor() { }

  ngOnInit() {
    this.obterTemperaturaAtual();
  }

  async obterTemperaturaAtual() {
    try {
      const resposta = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=-14.796581726513459&lon=-39.173008679879025&exclude=minutely,hourly&units=metric&appid=70fd9d2c18a3ccd0fadf64377139e91d&lang=pt_br');
      const temperatura = await resposta.json();
      this.temperaturaAtual = Math.round(temperatura.current.temp) + 'ºC';
      this.descricaoTempoAtual = temperatura.current.weather[0].description.charAt(0).toUpperCase() + temperatura.current.weather[0].description.slice(1);
      this.tempMaximaHoje = Math.round(temperatura.daily[0].temp.max) + 'ºC';
      this.tempMinimaHoje = Math.round(temperatura.daily[0].temp.min) + 'ºC';
    } catch (error) {
      console.error('Erro com a chamada fetch: ', error);
    }
  }
}
