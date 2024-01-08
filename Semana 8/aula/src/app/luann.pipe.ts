import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'luann'
})
export class LuannPipe implements PipeTransform {

  transform(valor: string): string {
    return valor.replace(/\b\w/g, char => char.toUpperCase());
  }

}
