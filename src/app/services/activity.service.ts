import {Injectable} from '@angular/core';
import {filter, find} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {Activity} from '../interfaces/Models/activity';
import * as _ from 'lodash';
import {ManageDataService} from './manage-data.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  public activities = new BehaviorSubject(Array<Activity>());

  constructor(private mdService: ManageDataService) {
    this.activities.next(mdService.getActivitiesFromLocalStorage());
  }

  public getItems() {
    return this.activities;
  }

  public insertItem(activity: Activity) {
    this.activities.next([...this.activities.getValue(), activity]);
    _.debounce(this.synchronizeWithLocalStorage, 2000);
  }

  public updateItem(activity: Activity) {

    const newStore = this.activities.getValue().filter((element) => {
      return element.id !== activity.id;
    });
    this.activities.next([...newStore, activity]);
    _.debounce(this.synchronizeWithLocalStorage, 2000);
  }

  public deleteItem(activity: Activity) {
    const newStore = this.activities.getValue().filter((element) => {
      return element.id !== activity.id;
    });
    this.activities.next([...newStore]);
    _.debounce(this.synchronizeWithLocalStorage, 2000);
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
    this.activities.subscribe(data => this.mdService.updateActivitiesToLocalStorage(data));
  }

}

