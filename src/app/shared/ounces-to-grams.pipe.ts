import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ouncesToGrams'
})
export class OuncesToGramsPipe implements PipeTransform {

  transform(oz: number): unknown {
    const MULTIPLIER: number = 28.35;
    return oz * MULTIPLIER;
  }

}
