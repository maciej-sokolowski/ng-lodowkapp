import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import * as _ from 'lodash';
import {ManageDataService} from './manage-data.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetMemoryService {

  private widgetsSet: BehaviorSubject<object> = new BehaviorSubject({
    'widget-1': '',
    'widget-2': '',
    'widget-3': '',
    'widget-4': '',
    'widget-5': '',
    'widget-6': '',
  });

  constructor(private mdService: ManageDataService) {
    const data: object = this.mdService.getWidgetSetFromLocalStorage();
    if (data !== null) {
      this.widgetsSet.next(data);
    }
  }

  public getWidgetsSet() {
    return this.widgetsSet;
  }

  public updateWidgetSet(newStore: object) {
    this.widgetsSet.next(newStore);

    this.synchronizeWithLocalStorage();
  }

  private synchronizeWithLocalStorage() {
    _.debounce(() => this.mdService.updateWidgetSetToLocalStorage(this.widgetsSet.getValue()), 2500)();
  }

}
