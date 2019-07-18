import {Component, DoCheck, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Product} from '../../../interfaces/Models/product';
import {ProductService} from '../../../services/product.service';

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

  constructor(private prService: ProductService) {

  }

  ngOnInit() {
    if (this.product.expiryDate === undefined || this.product.name === undefined) {
      this.product.dotColor = '#bbaeb2';
    } else {
      this.tryChangeColorWithInit();
    }
  }


  changeLabelVisibility() {
    // debugger;
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
    }
    this.prService.updateItem(this.product);
  }
}
