import {Directive, ElementRef, HostListener} from '@angular/core';
import { CustomCurrencyPipe } from '../_Pipes/customCurrency.pipe';

@Directive({
  selector: 'input[customCurrency]'
})

export class CustomCurrencyDirective {


  constructor( private element: ElementRef, private customPipe: CustomCurrencyPipe) { }

  @HostListener('focus') onFocus() {
    let value = this.element.nativeElement.value;

    value = value.replace('$', '').split('').filter((item) => {
      return (item.length === 0 || item.trim());
    }).join('');

    this.element.nativeElement.value = value;
  }

  @HostListener('blur') onBlur() {

    const val = this.customPipe.transform(this.element.nativeElement.value, '$');
    this.element.nativeElement.value = val;
  }
}
