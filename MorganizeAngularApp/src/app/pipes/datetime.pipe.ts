import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: number, format:string): any {
    let dt = new Date(value);
    let output:string;
    switch(format.toLowerCase()){
      case "iso":
        output = dt.toISOString().split(".")[0];
        break;
      default:
        output = dt.toISOString().split(".")[0];
    }
    
    return output;
  }

}
