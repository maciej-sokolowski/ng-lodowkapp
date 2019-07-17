import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'daysToToday',
  pure: false
})
export class DaysToTodayPipe implements PipeTransform {

  dayTime = 86400000;

  transform(value: Date): any {
    const daysCount = Math.ceil((value.valueOf() - Date.now().valueOf()) / this.dayTime);
    console.log(daysCount);
    if (daysCount === 1) {
      return `${daysCount} DAY`;
    } else {
      return `${daysCount} DAYS`;
    }
  }

}
