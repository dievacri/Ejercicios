import { Pipe, PipeTransform } from '@angular/core';
import {IJugador} from './models/IJugador';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: IJugador[], name: string): IJugador[] {

    if (array) {
      array.sort((a: IJugador, b: IJugador) => {
        if ( a[name] < b[name] ) {
          return -1;
        }else if ( a[name] > b[name] ) {
          return 1;
        }else{
          return 0;
        }
      });
    }
    return array;
  }

}
