import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export enum labelColors {
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
  @Output() dotColor: EventEmitter<string> = new EventEmitter<string>();
  parsedDate: number;
  labelColor: labelColors;
  dayTime = 86400000;

  constructor() {

  }

  ngOnInit() {
    this.parsedDate = Date.parse(String(this.date));
    this.setLabel();
    setInterval(() => this.setLabel(), 9000000);
  }

  private setLabel() {
    console.log('change colors');
    const timeBetweenExpiry = this.parsedDate - Date.now().valueOf();

    if (timeBetweenExpiry >= 10 * this.dayTime) {
      this.labelColor = labelColors.GREEN;
      this.dotColor.emit('#70D9A8');
    } else if (timeBetweenExpiry > 0 && timeBetweenExpiry < 10 * this.dayTime) {
      this.labelColor = labelColors.YELLOW;
      this.dotColor.emit('#FFCE2D');
    } else {
      this.labelColor = labelColors.RED;
      this.dotColor.emit('#FF4E4E');
    }
  }
}

