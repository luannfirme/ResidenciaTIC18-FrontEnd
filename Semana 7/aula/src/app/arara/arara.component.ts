import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  url : string = 'https://www.coisasdaroca.com/wp-content/uploads/2020/05/arara-2-e1589913883442.jpg';
  nome : string = 'Arara Azul';

  public exemplo1(): string {
    return 'Exibir exemplo arara'
  }

  public exemplo2(): string {
    return 'Negrito teste..'
  }

  @Input() cor : string = "";
}