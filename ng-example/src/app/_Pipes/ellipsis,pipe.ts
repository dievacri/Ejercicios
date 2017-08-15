import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myEllipsis'
})

export class EllipsisPipe implements PipeTransform {
  transform(value: string, args: number): string {
    if(args === undefined) {
      return value;
    }

    if(value.length > args) {
      let myData = value.substring(0, args) + '...';
      console.log(myData);

      return myData;
    }else{
      return value;
    }
  }
}
