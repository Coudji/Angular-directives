import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loutre',
  standalone: true
})
export class LoutrePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const splitted = value.split(" ");
    const mapped = splitted.map(splittedWord => args[0] ?? "Loutre");
    return mapped.join(' ');
  }

}
