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
  parsedDate: number;
  labelColor: labelColors;
  dayTime = 86400000;

  constructor() {

  }

  ngOnInit() {
    this.parsedDate = Date.parse(String(this.date));
    this.setLabel();
  }

  private setLabel() {
    const timeBetweenExpiry = this.parsedDate - Date.now().valueOf();

    if (timeBetweenExpiry >= 10 * this.dayTime) {
      this.labelColor = labelColors.GREEN;
    } else if (timeBetweenExpiry > 0 && timeBetweenExpiry < 10 * this.dayTime) {
      this.labelColor = labelColors.YELLOW;
    } else {
      this.labelColor = labelColors.RED;
    }
  }
}

