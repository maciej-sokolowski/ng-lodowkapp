import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../interfaces/Models/product';
import {filter, find} from 'rxjs/operators';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products = new BehaviorSubject(Array<Product>());

  constructor(private mdService: ManageDataService) {
    this.products.next(this.mdService.getProductsFromLocalStorage());
  }

  public getItems() {
    return this.products;
  }

  public insertItem(product: Product) {
    this.products.next([...this.products.getValue(), product]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public updateItem(product: Product) {
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore, product]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public deleteItem(product: Product) {
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public getItemById(id: string) {
    return this.products.pipe(
      find(products => products === products.filter(element => {
        return element.id === id;
      }))
    );
  }

  public getItemByName(name: string) {
    return this.products.pipe(
      filter(products => products === products.filter(element => {
        return element.name === name;
      }))
    );
  }


  public getItemsBeforeExpiry() {
    return this.products.pipe(
      filter(products => products === products.filter(element => {
        return element.expiryDate.valueOf() >= Date.now().valueOf();
      }))
    );
  }

  public getItemsAfterExpiry(date: Date) {
    return this.products.pipe(
      filter(products => products === products.filter(element => {
        return element.expiryDate.valueOf() < Date.now().valueOf();
      }))
    );
  }

  public getItemsByPriority(priority: number) {
    return this.products.pipe(
      filter(products => products === products.filter(element => {
        return element.priority === priority;
      }))
    );
  }

  public getItemsByNeed(need: boolean) {
    return this.products.pipe(
      filter(products => products === products.filter(element => {
        return element.needToBuy === need;
      }))
    );
  }

  public synchronizeWithLocalStorage() {
    this.products.subscribe(data => this.mdService.updateProductsToLocalStorage(data));
  }

}
