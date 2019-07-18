import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../interfaces/Models/product';
import {ProductService} from '../../../services/product.service';
import {Activity} from '../../../interfaces/Models/activity';
import {v4 as uuid} from 'uuid';
import {ActivityService} from '../../../services/activity.service';

enum Visible {
  YES = 1,
  NOT = 2,
}

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {

  static activeLabelID = '';
  @Input() product: Product;
  @Output() cloudActiveNotification = new EventEmitter<boolean>();
  visibleLabel = Visible.NOT;

  get ActiveLabelID() {
    return DotComponent.activeLabelID;
  }

  set ActiveLabelID(value: string) {
    DotComponent.activeLabelID = value;
  }

  constructor(private prService: ProductService, private actService: ActivityService) {

  }

  ngOnInit() {
    if (this.product.expiryDate !== undefined || this.product.name !== undefined) {
      this.tryChangeColorWithInit();
      setInterval(() => this.tryChangeColorWithInit(), 900000);
    }
  }

  changeLabelVisibility() {
    if (this.ActiveLabelID === '') {
      this.ActiveLabelID = this.product.id;
      this.visibleLabel = Visible.YES;
      this.cloudActiveNotification.emit(true);
    } else {
      if (this.ActiveLabelID === this.product.id) {
        this.ActiveLabelID = '';
        this.visibleLabel = Visible.NOT;
        this.cloudActiveNotification.emit(false);
      }
    }

  }

  removeProduct() {
    const activity: Activity = {
      id: uuid(),
      userId: 'FRIDGE',
      date: new Date(Date.now()),
      message: `Product ${this.product.name} has been removed from fridge`,
      messageColor: '#FF4E4E'
    };
    this.actService.insertItem(activity);

    this.prService.deleteItem(this.product);
    this.ActiveLabelID = '';
    this.cloudActiveNotification.emit(false);
  }


  private tryChangeColorWithInit() {
    const parsedDate = Date.parse(String(this.product.expiryDate));
    const timeBetweenExpiry = parsedDate - Date.now().valueOf();
    const dayTime = 86400000;

    if (timeBetweenExpiry >= 10 * dayTime) {
      this.product.dotColor = '#70D9A8';
    } else if (timeBetweenExpiry > 0 && timeBetweenExpiry < 10 * dayTime) {
      this.product.dotColor = '#FFCE2D';
    } else {
      this.product.dotColor = '#FF4E4E';
      const activity: Activity = {
        id: uuid(),
        userId: 'FRIDGE',
        date: new Date(Date.now()),
        message: `${this.product.name} has expired!`,
        messageColor: '#FF4E4E'
      };
      this.actService.insertItem(activity);
    }
    this.prService.updateItem(this.product);
  }

  changeNeedToBuyStatus(status: boolean) {
    this.product.needToBuy = status;
    this.prService.updateItem(this.product);
  }
}
