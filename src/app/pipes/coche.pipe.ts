import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coche'
})
export class CochePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
