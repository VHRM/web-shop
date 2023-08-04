import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2, style: 'currency', currency: 'BRL'}).format(value as number);
  }

}
