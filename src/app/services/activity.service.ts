import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Activity} from '../interfaces/Models/activity';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';
import {StoreManager} from '../interfaces/store-manager';

@Injectable({
  providedIn: 'root'
})
export class ActivityService implements StoreManager<Activity> {

  public activities: BehaviorSubject<Activity[]> = new BehaviorSubject([]);


  constructor(private mdService: ManageDataService) {
    const data: Activity[] = mdService.getActivitiesFromLocalStorage();
    if (data !== null) {
      this.activities.next(data);
    }
  }

  public getItems() {
    return this.activities;
  }

  public insertItem(activity: Activity) {
    this.activities.next([...this.activities.getValue(), activity]);
    this.synchronizeWithLocalStorage();
  }

  public updateItem(activity: Activity) {
    const newStore = this.activities.getValue().filter((element) => {
      return element.id !== activity.id;
    });
    this.activities.next([...newStore, activity]);
    this.synchronizeWithLocalStorage();
  }

  public deleteItem(activity: Activity) {
    const newStore = this.activities.getValue().filter((element) => {
      return element.id !== activity.id;
    });
    this.activities.next([...newStore]);
    this.synchronizeWithLocalStorage();
  }

  private synchronizeWithLocalStorage() {
    _.debounce(() => this.mdService.updateActivitiesToLocalStorage(this.activities.getValue()), 2500)();
  }

  public getItemsByUserId(userId: string) {
    return this.activities.getValue().filter(element => element.userId === userId);
  }

}

