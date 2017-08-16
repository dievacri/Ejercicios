import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})

export class CustomCurrencyPipe implements PipeTransform {
  transform(value: string, args: string = '$'): string {
    if (value === undefined) {
      return value;
    }
    let num: any = value.split('.');
    const enteros = num[0];
    let dec = '';
    let result = '';
    let n = 0;

    dec = (num.length > 1) ? `.${num[1]}` : `.00`;

    num = enteros.split('').reverse().join('').split('');

    for (let i = 0; i < num.length; i++) {
      n++;
      if (n === 3) {
        result += `${num[i]} `;
        n = 0;
      } else {
        result += num[i];
      }
    }
    value = result.split('').reverse().join('');
    value = `${value}${dec} ${args}`;

    return value;
  }
}
