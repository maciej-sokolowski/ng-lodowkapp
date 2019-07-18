import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../interfaces/Models/product';
import {NameDate} from '../../../interfaces/name-date';
import {ProductService} from '../../../services/product.service';
import {ActivityService} from '../../../services/activity.service';
import {Activity} from '../../../interfaces/Models/activity';
import {v4 as uuid} from 'uuid';

enum Edit {
  YES = 1,
  NOT = 2,
}

@Component({
  selector: 'app-product-cloud',
  templateUrl: './product-cloud.component.html',
  styleUrls: ['./product-cloud.component.scss']
})
export class ProductCloudComponent implements OnInit {

  editable: Edit;
  @Input() product: Product;
  @Output() removeSignal: EventEmitter<void> = new EventEmitter<void>();
  @Output() needToBuyStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  public editButtonChildren = 'Edit';
  public buyButtonChildren: string;
  public editDisable = false;
  public needToBuyDisable = false;

  constructor(private prService: ProductService, private actService: ActivityService) {
  }

  ngOnInit() {
    if (this.product.name === undefined && this.product.expiryDate === undefined) {
      this.editDisable = true;
      this.needToBuyDisable = true;
      this.editable = Edit.YES;
    } else {
      this.editable = Edit.NOT;
    }
    if (this.product.needToBuy === true) {
      this.buyButtonChildren = 'Don\'t buy';
    } else {
      this.buyButtonChildren = 'To Buy';
    }

  }

  // TODO: uncomment

  changeNameAndDate(value: NameDate) {
    this.product.name = value.name;
    this.product.expiryDate = new Date(value.expiry);
    this.prService.updateItem(this.product);
    this.editable = Edit.NOT;
    this.editDisable = false;
    this.needToBuyDisable = false;
    this.editButtonChildren = 'Edit';

    const acivity: Activity = {
      id: uuid(),
      userId: 'FRIDGE',
      date: new Date(Date.now()),
      message: `Added new product ${value.name}`,
      messageColor: '#70D9A8'
    };
    this.actService.insertItem(acivity);
  }

  edit() {
    if (this.editable === Edit.NOT) {
      this.editable = Edit.YES;
      this.editButtonChildren = 'Cancel';
    } else {
      this.editable = Edit.NOT;
      this.editButtonChildren = 'Edit';
    }
  }

  remove() {
    this.removeSignal.emit();
  }

  updateDotColor(color) {
    this.product.dotColor = color;
    this.prService.updateItem(this.product);
  }

  emitInfoAboutChangingNeedToBuyStatus() {
    if (this.product.needToBuy === false) {
      this.needToBuyStatus.emit(true);
      this.buyButtonChildren = 'Don\'t buy';
    } else {
      this.needToBuyStatus.emit(false);
      this.buyButtonChildren = 'To Buy';
    }
  }

}
