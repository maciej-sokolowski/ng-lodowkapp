import {Injectable} from '@angular/core';
import {filter, find} from 'rxjs/operators';
import {Image} from '../interfaces/Models/image';
import {BehaviorSubject} from 'rxjs';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';
import {StoreManager} from '../interfaces/store-manager';

@Injectable({
  providedIn: 'root'
})
export class ImageService implements StoreManager<Image> {

  public images: BehaviorSubject<Image[]> = new BehaviorSubject([]);

  constructor(private mdService: ManageDataService) {
    const data: Image[] = mdService.getImagesFromLocalStorage();
    if (data !== null) {
      this.images.next(data);
    }
  }

  public getItems() {
    return this.images;
  }

  public insertItem(image: Image) {
    this.images.next([...this.images.getValue(), image]);
    this.synchronizeWithLocalStorage();
  }

  public updateItem(image: Image) {
    const newStore = this.images.getValue().filter((element) => {
      return element.id !== image.id;
    });
    this.images.next([...newStore, image]);
    this.synchronizeWithLocalStorage();
  }

  public deleteItem(image: Image) {
    const newStore = this.images.getValue().filter((element) => {
      return element.id !== image.id;
    });
    this.images.next([...newStore]);
    this.synchronizeWithLocalStorage();
  }

  public synchronizeWithLocalStorage() {
    _.debounce(() => this.mdService.updateImagesToLocalStorage(this.images.getValue()), 2500)();
  }

  public getItemById(id: string) {
    return this.images.pipe(
      find(images => images === images.filter(element => {
        return element.id === id;
      }))
    );
  }

  public getItemsByUserId(userId: string) {
    return this.images.pipe(
      filter(images => images === images.filter(element => {
        return element.userId === userId;
      }))
    );
  }


}
