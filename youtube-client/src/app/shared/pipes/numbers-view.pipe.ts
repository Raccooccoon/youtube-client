import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersView'
})
export class NumbersViewPipe implements PipeTransform {
  public transform(num: (string | number)): string {

    if (Number(num) >= 1000000) {
      const transformedNum: string = (Number(num) / 1000000).toFixed(1).toLocaleString();
      return `${transformedNum}m`;
    }
    if (Number(num) >= 100) {
      const transformedNum: string = (Number(num) / 1000).toFixed(1).toLocaleString();
      return `${transformedNum}k`;
    }
    return num === undefined ? `${0}` : `${num}`;
  }
}
