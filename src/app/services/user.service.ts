import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/Models/user';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor(private mdService: ManageDataService) {
    const data: User[] = mdService.getUsersFromLocalStorage();
    if (data !== null) {
      this.users.next(data);
    }
  }

  public getItems() {
    return this.users;
  }

  public insertItem(user: User) {
    this.users.next([...this.users.getValue(), user]);
    console.log('my store: ', this.users.getValue());
    this.synchronizeWithLocalStorage();
  }

  public updateItem(user: User) {
    const newStore = this.users.getValue().filter((element) => {
      return element.id !== user.id;
    });
    this.users.next([...newStore, user]);
    this.synchronizeWithLocalStorage();
  }

  public deleteItem(user: User) {
    const newStore = this.users.getValue().filter((element) => {
      return element.id !== user.id;
    });
    this.users.next([...newStore]);
    this.synchronizeWithLocalStorage();
  }

  public synchronizeWithLocalStorage() {
    _.debounce(() => this.mdService.updateUsersToLocalStorage(this.users.getValue()), 2500)();
  }
}
