import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eightDigits'
})
export class EightDigitsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const numSides = (value + '').split('.');
    numSides[1] = numSides[1] ? numSides[1] : '';
    while (numSides[1].length < 8) {
      numSides[1] = numSides[1] + '0'
    };
    return numSides[0] + '.' + numSides[1];
  }

}
