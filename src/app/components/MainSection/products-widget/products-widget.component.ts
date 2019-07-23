import {Component, OnInit} from '@angular/core';
import {Product} from '../../../interfaces/Models/product';
import {ProductService} from '../../../services/product.service';
import {ActiveView} from '../../FridgeSection/fridge/fridge.component';

@Component({
  selector: 'app-products-widget',
  templateUrl: './products-widget.component.html',
  styleUrls: ['./products-widget.component.scss']
})
export class ProductsWidgetComponent implements OnInit {

  products: Product[];

  constructor(private prService: ProductService) {
    prService.getItems().subscribe(products => this.products = products.sort((pr1, pr2) => {
      return Date.parse(String(pr1.expiryDate)) < Date.parse(String(pr2.expiryDate)) ? -1 : 1;
    }));
  }

  ngOnInit() {

  }

  setFridgeTab() {
    this.prService.fridgeTab = ActiveView.Fridge;
  }

  setListTab() {
    this.prService.fridgeTab = ActiveView.List;
  }

}
