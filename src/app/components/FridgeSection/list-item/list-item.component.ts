import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../interfaces/Models/product';
import {labelColors} from '../info/info.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() product: Product;
  labelColor: labelColors;
  parsedDate: number;
  dayTime = 86400000;

  constructor() {
  }

  ngOnInit() {
    this.parsedDate = Date.parse(String(this.product.expiryDate));
    this.setLabel();
    setInterval(() => this.setLabel(), 900000);
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
