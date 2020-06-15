import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe, DatePipe, getCurrencySymbol } from '@angular/common';

@Pipe({ name: 'formatter' })
export class Formatter implements PipeTransform {
  transform(value: any, formatString: string): any {
    // to format the date
    if (formatString === 'date' && value) {
      try {
        const datePipe = new DatePipe('en-IN');
        return datePipe.transform(value, 'yyyy-MM-dd', '', 'en-IN');
      } catch (error) {
        // for DD-MM-YYYY date type.
        let splitDate = value.split('-');
        if (!splitDate || splitDate.length < 3) {
          // for DD/MM/YYYY date type.
          splitDate = [];
          splitDate = value.split('/');
        }
        if (splitDate && splitDate.length >= 3) {
          const isoFormatDate = splitDate.reverse().join('-');
          const datePipe = new DatePipe('en-IN');
          return datePipe.transform(isoFormatDate, 'yyyy-MM-dd', '', 'en-IN');
        }
        return value;
      }
    }
    // to format the date time
    if (formatString === 'dateTime' && value) {
      try {
        const datePipe = new DatePipe('en-IN');
        return datePipe.transform(value, 'd MMM y | h:mm a', '', 'en-IN');
      } catch (error) {
        // for DD-MM-YYYY date type.
        let splitDate = value.split('-');
        if (!splitDate || splitDate.length < 3) {
          // for DD/MM/YYYY date type.
          splitDate = [];
          splitDate = value.split('/');
        }
        if (splitDate && splitDate.length >= 3) {
          const isoFormatDate = splitDate.reverse().join('-');
          const datePipe = new DatePipe('en-IN');
          return datePipe.transform(
            isoFormatDate,
            'd MMM y | h:mm a',
            '',
            'en-IN'
          );
        }
        return value;
      }
    }
    // show date time with seconds as well
    if (formatString === 'datetime' && value) {
      const datePipe = new DatePipe('en-IN');
      return datePipe.transform(value, 'yyyy-MM-dd HH:mm:ss', '', 'en-IN');
    }
    // to show the currency proper format
    if (formatString === 'currency' && value) {
      // tslint:disable
      return (
        getCurrencySymbol('INR', 'narrow') +
        ' ' +
        Math.round(Number(value)).toLocaleString('en-IN')
      );
    }
    // number formatter
    if (formatString === 'number' && value) {
      const decimalPipe = new DecimalPipe('en-IN');
      return decimalPipe.transform(value, '1.0');
    }
  }
}
