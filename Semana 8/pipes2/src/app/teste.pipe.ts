import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teste'
})
export class TestePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
