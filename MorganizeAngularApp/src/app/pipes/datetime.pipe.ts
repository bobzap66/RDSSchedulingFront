import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  monthString:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  transform(value: number):string {

    let dt = new Date(value);
    let output:string;

      let month = this.monthString[dt.getMonth()]
 
      
      output = `${String(dt.getHours()).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")}  ${month}-${String(dt.getDate()).padStart(2, "0")}`;
   
        
    return output;
  }

  

}
