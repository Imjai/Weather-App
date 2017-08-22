import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({
  name: 'temperature',
})

@Injectable()
export class Temperature implements PipeTransform {
     
  transform(value: string, args: any[]) {
    var c = Math.round(parseInt(value,10) - 273.15);
    var f = Math.round(parseInt(value,10) * 9/5 -459.67);
    return '${f} F';
  }
}
