import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';

export enum ActiveView {
  Fridge = 1,
  List = 2,
}

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})

export class FridgeComponent implements OnInit {

  active = ActiveView.List;

  constructor(private prService: ProductService) {
    if (prService.fridgeTab === undefined) {
      this.active = ActiveView.Fridge;
    } else {
      this.active = prService.fridgeTab;
    }

  }

  ngOnInit() {
  }

  setCameraVisible() {
    this.active = ActiveView.Fridge;
  }

  setListVisible() {
    this.active = ActiveView.List;
  }

}
