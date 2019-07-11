import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/Models/user';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = new BehaviorSubject(Array<User>());

  constructor(private mdService: ManageDataService) {
    this.users.next(mdService.getUsersFromLocalStorage());
  }

  public getItems() {
    return this.users;
  }

  public insertItem(user: User) {
    this.users.next([...this.users.getValue(), user]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public updateItem(user: User) {
    const newStore = this.users.getValue().filter((element) => {
      return element.id !== user.id;
    });
    this.users.next([...newStore, user]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public deleteItem(user: User) {
    const newStore = this.users.getValue().filter((element) => {
      return element.id !== user.id;
    });
    this.users.next([...newStore]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public synchronizeWithLocalStorage() {
    this.users.subscribe(data => this.mdService.updateUsersToLocalStorage(data));
  }
}
