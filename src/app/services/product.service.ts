import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../interfaces/product';
import {filter, find} from 'rxjs/operators';

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
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore, product]);
  }

  public deleteItem(product: Product) {
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore]);
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

}
