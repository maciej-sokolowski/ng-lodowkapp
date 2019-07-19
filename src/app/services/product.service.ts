import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../interfaces/Models/product';
import {filter, find} from 'rxjs/operators';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';
import {StoreManager} from '../interfaces/store-manager';
import {PushNotificationService} from './push-notification.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements StoreManager<Product> {

  public products: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor(private mdService: ManageDataService, private notifyService: PushNotificationService) {
    const data: Product[] = mdService.getProductsFromLocalStorage();
    if (data !== null) {
      this.products.next(data);
    }
  }

  public getItems() {
    return this.products;
  }

  public insertItem(product: Product) {
    this.products.next([...this.products.getValue(), product]);
    this.synchronizeWithLocalStorage();
  }

  public updateItem(product: Product) {
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore, product]);
    this.synchronizeWithLocalStorage();
  }

  public deleteItem(product: Product) {
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore]);
    // this.notifyService.notifyAboutRemovedProduct(product);
    this.synchronizeWithLocalStorage();
  }

  private synchronizeWithLocalStorage() {
    _.debounce(() => this.mdService.updateProductsToLocalStorage(this.products.getValue()), 2500)();

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

  public getItemsByNeed(need: boolean) {
    return this.products.pipe(
      filter(products => products === products.filter(element => {
        return element.needToBuy === need;
      }))
    );
  }
}
