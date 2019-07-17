import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'daysToToday',
  pure: false
})
export class DaysToTodayPipe implements PipeTransform {

  dayTime = 86400000;
  parsedDate: number;

  transform(value: Date): any {
    this.parsedDate = Date.parse(String(value));
    const daysCount = Math.ceil((this.parsedDate - Date.now().valueOf()) / this.dayTime);

    if (daysCount === 1) {
      return `${daysCount} DAY`;
    } else if (daysCount > 1) {
      return `${daysCount} DAYS`;
    } else {
      return 'EXPIRED';
    }
  }

}
