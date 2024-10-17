import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'
import * as datefns from 'date-fns'

@Pipe({ name: 'datex' })
export class DatexPipe implements PipeTransform {
  transform(value: any, format: string = "", time: boolean = false): string | any {
    if (!value) {
      return;
    }
    if (time) {
      const vals = value.split(':').map((el: any) => Number(el));
      let date = new Date().setHours(vals[0], vals[1], vals[2]);
      return datefns.format(date, format);
    }
    return moment(value).isValid() ? moment(value).format(format) : value;
  }
}