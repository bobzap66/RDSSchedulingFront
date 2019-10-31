import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  monthString:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  transform(value: number, ...args:string[]):string {
    console.log(value);
    let dt = new Date(value);
    let output:string;
    let format:string = args.length > 0 ? args[0] : ""; 
    switch(format){
    case "iso":
      output = dt.toISOString().split(".")[0];
      break;
    default:
      let month = this.monthString[dt.getMonth() - 1]
      output = `${String(dt.getHours()).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")}:${String(dt.getSeconds()).padStart(2, "0")}  ${dt.getDate()} ${month}`;
    } 
        
    return output;
  }

}
