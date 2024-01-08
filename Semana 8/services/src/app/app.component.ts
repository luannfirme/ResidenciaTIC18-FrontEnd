import { Component } from '@angular/core';
import { LogandoService } from './services/logando.service';
import { PrevisaoTempoService } from './services/previsao-tempo.service';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';
  weatherData: any;

  constructor(private tempoService: PrevisaoTempoService) { 

  }

  ngOnInit() {
    this.tempoService.getTempo().subscribe((data) => {
      this.weatherData = data;
    });
  }
}
