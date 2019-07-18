import {BehaviorSubject} from 'rxjs';

export interface StoreManager<T> {
  getItems(): BehaviorSubject<T[]>;

  insertItem(item: T): void;

  updateItem(item: T): void;

  deleteItem(item: T): void;
}
