import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, targetIndex?:number): string {
    let toSummarise = value.slice(0,targetIndex ?? 20);

    if (value.length > (targetIndex ?? 20)) toSummarise += " ..."
    
    return toSummarise;
  }

}
