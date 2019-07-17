import {Component, Input, OnInit} from '@angular/core';

enum labelColors {
  GREEN = 1,
  YELLOW = 2,
  RED = 3
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() title: string;
  @Input() date: Date;
  labelColor: labelColors;
  dayTime = 86400000;
  formatedTimeStamp: string;

  constructor() {

  }

  ngOnInit() {
    this.setLabel();
  }

  setLabel() {
    // debugger;
    const timeBetweenExpiry = this.date.valueOf() - Date.now().valueOf();

    if (timeBetweenExpiry >= 10 * this.dayTime) {
      this.labelColor = labelColors.GREEN;
    } else {
      if (timeBetweenExpiry > 0 && timeBetweenExpiry < 10 * this.dayTime) {
        this.labelColor = labelColors.YELLOW;
        const daysCount = Math.floor(timeBetweenExpiry / this.dayTime);
        console.log(daysCount);
        if (daysCount === 1) {
          this.formatedTimeStamp = `${daysCount} DAY`;
        } else {
          this.formatedTimeStamp = `${daysCount} DAYS`;
        }

      } else {
        this.labelColor = labelColors.RED;
      }
    }
  }
}

