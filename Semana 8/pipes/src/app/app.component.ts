import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.0_canosPipes';

  teste = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolvida");
      }, 2000)});
    
  

  //utilizando async await
  getNomePaises(){
    fetch('https://restcountries.com/v3.1/all')
    .then (resposta => resposta.json())
    .then(paises => paises.map( (pais:any) => pais.name.common))
    .then (paises => paises.forEach((elemento:any) => {
      console.log("p::=> "+elemento)
    }))
    .catch(error => console.error('Erro com a chamada fetch: ', error));
  }
}



