import {Product} from './Models/product';
import {User} from './Models/user';
import {Note} from './Models/note';
import {Activity} from './Models/activity';
import {Image} from './Models/image';

export interface DataManager {
  getUsersFromLocalStorage(): User[];

  getProductsFromLocalStorage(): Product[];

  getNotesFromLocalStorage(): Note[];

  getActivitiesFromLocalStorage(): Activity[];

  getImagesFromLocalStorage(): Image[];

  getWidgetSetFromLocalStorage(): object;

  updateUsersToLocalStorage(users: Array<User>): void;

  updateProductsToLocalStorage(products: Array<Product>): void;

  updateNotesToLocalStorage(notes: Array<Note>): void;

  updateActivitiesToLocalStorage(activities: Array<Activity>): void;

  updateImagesToLocalStorage(images: Array<Image>): void;

  updateWidgetSetToLocalStorage(widgetSet: object): void;


}
