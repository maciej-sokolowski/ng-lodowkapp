import { Injectable } from '@angular/core';
import { ActivityService } from './activity.service';
import { Product } from '../interfaces/Models/product';
import { Activity } from '../interfaces/Models/activity';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  products: Product[];

  constructor(private actService: ActivityService) {

  }

  notifyAboutNewProduct(product: Product) {
    const activity: Activity = {
      id: uuid(),
      userId: 'FRIDGE',
      date: Date.now(),
      message: `Added new product: ${product.name}`,
      messageColor: '#70D9A8'
    };
    this.actService.insertItem(activity);
  }

  notifyAboutRemovedProduct(product: Product) {
    const activity: Activity = {
      id: uuid(),
      userId: 'FRIDGE',
      date: Date.now(),
      message: `${product.name} has been removed`,
      messageColor: '#70D9A8'
    };
    this.actService.insertItem(activity);
  }

  notifyAboutEdit(previousState: Product, actualState: Product) {
    if (previousState.name !== actualState.name) {
      const activity: Activity = {
        id: uuid(),
        userId: 'FRIDGE',
        date: Date.now(),
        message: `${previousState.name} has been changed to ${actualState.name}`,
        messageColor: '#FFCE2D'
      };
      this.actService.insertItem(activity);
    }
  }

  notifyAboutBuying(product: Product) {
    const activity: Activity = {
      id: uuid(),
      userId: 'FRIDGE',
      date: Date.now(),
      message: `${product.name} has been added to shop list`,
      messageColor: '#00C3FF'
    };
    this.actService.insertItem(activity);
  }

  notifyAboutExpiredProducts(products: Product[]) {
    products.forEach(product => {
      const activity: Activity = {
        id: uuid(),
        userId: 'FRIDGE',
        date: Date.now(),
        message: `${product.name} has expired`,
        messageColor: '#FF4E4E'
      };
      this.actService.insertItem(activity);
    });

  }
}
