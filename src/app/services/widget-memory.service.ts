import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetMemoryService {

  private widgetsSet: BehaviorSubject<any> = new BehaviorSubject({
    'widget-1': '',
    'widget-2': '',
    'widget-3': '',
    'widget-4': '',
    'widget-5': '',
    'widget-6': '',
    'widget-7': '',
  });

  constructor() {
  }

  public getWidgetsSet() {
    return this.widgetsSet;
  }

  public updateWidgetSet(newStore: any) {
    this.widgetsSet.next({...newStore});
  }


}
