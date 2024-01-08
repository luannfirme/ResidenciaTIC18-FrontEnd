import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


interface Food {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngModelo';
  apareceCampoComentario: boolean = true;
  selecionado: string = '';

  data_de_hoje = new Date();
  frase:string = 'O rato roeu a roupa do rei de roma';

  nome:string = 'Jorge';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Carne'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  toggleComentario() {
    this.apareceCampoComentario = !this.apareceCampoComentario;
  }
  
}
