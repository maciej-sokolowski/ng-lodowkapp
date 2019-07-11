import {Injectable} from '@angular/core';
import {filter, find} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {Activity} from '../interfaces/Models/activity';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
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

  public getItemById(id: string) {
    return this.activities.pipe(
      find(activities => activities === activities.filter(element => {
        return element.id === id;
      }))
    );
  }

  public getItemsByUserId(userId: string) {
    return this.activities.pipe(
      filter(activities => activities === activities.filter(element => {
        return element.userId === userId;
      }))
    );
  }

  public getItemsByDate(date: Date) {
    return this.activities.pipe(
      filter(activities => activities === activities.filter(element => {
        return element.date === date;
      }))
    );
  }

  public getItemsBefore(date: Date) {
    return this.activities.pipe(
      filter(activities => activities === activities.filter(element => {
        return element.date.valueOf() < date.valueOf();
      }))
    );
  }

  public getItemsAfter(date: Date) {
    return this.activities.pipe(
      filter(activities => activities === activities.filter(element => {
        return element.date.valueOf() >= date.valueOf();
      }))
    );
  }

  public getItemsByPriority(priority: number) {
    return this.activities.pipe(
      filter(activities => activities === activities.filter(element => {
        return element.priority === priority;
      }))
    );
  }

  public synchronizeWithLocalStorage() {
    _.debounce(() => this.mdService.updateActivitiesToLocalStorage(this.activities.getValue()), 2500)();
  }

}

