import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
    if (this.ActiveLabelID === '') {
      this.ActiveLabelID = this.product.id;
      this.visibleLabel = Visible.YES;
      this.cloudActiveNotification.emit(true);
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

}
