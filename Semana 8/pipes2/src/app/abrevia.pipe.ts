import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'abreviaPipe'})
export class AbreviaPipe implements PipeTransform {
  transform(valor: string, limite:number = 1): string {
    return valor
    .split(' ')
    .map(word => word.substring(0, limite).toUpperCase())
    .join('.');
  }
}
