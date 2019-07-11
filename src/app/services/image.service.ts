import {Injectable} from '@angular/core';
import {filter, find} from 'rxjs/operators';
import {Image} from '../interfaces/Models/image';
import {BehaviorSubject} from 'rxjs';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  public images = new BehaviorSubject(Array<Image>());

  constructor(private mdService: ManageDataService) {
    this.images.next(this.mdService.getImagesFromLocalStorage());
  }

  public getItems() {
    return this.images;
  }

  public insertItem(image: Image) {
    this.images.next([...this.images.getValue(), image]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public updateItem(image: Image) {

    const newStore = this.images.getValue().filter((element) => {
      return element.id !== image.id;
    });
    this.images.next([...newStore, image]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public deleteItem(image: Image) {
    const newStore = this.images.getValue().filter((element) => {
      return element.id !== image.id;
    });
    this.images.next([...newStore]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
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

  public synchronizeWithLocalStorage() {
    this.images.subscribe(data => this.mdService.updateImagesToLocalStorage(data));
  }
}
