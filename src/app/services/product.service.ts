import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../interfaces/product';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products = new BehaviorSubject(Array<Product>());

  constructor() {
  }

  public getItems() {
    return this.products;
  }

  public insertItem(product: Product) {
    this.products.next([...this.products.getValue(), product]);
  }

  public updateItem(product: Product) {
    // tslint:disable-next-line:no-shadowed-variable
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore, product]);
  }

  public deleteItem(product: Product) {
    // tslint:disable-next-line:no-shadowed-variable
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore]);
  }
}
