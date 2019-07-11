import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Note} from '../interfaces/Models/note';
import {filter, find} from 'rxjs/operators';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public notes = new BehaviorSubject([]);

  constructor(private mdService: ManageDataService) {
    this.notes.next(this.mdService.getNotesFromLocalStorage());
  }

  public getItems() {
    return this.notes;
  }

  public insertItem(note: Note) {
    this.notes.next([...this.notes.getValue(), note]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public updateItem(note: Note) {
    const newStore = this.notes.getValue().filter((element) => {
      return element.id !== note.id;
    });
    this.notes.next([...newStore, note]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public deleteItem(note: Note) {
    const newStore = this.notes.getValue().filter((element) => {
      return element.id !== note.id;
    });
    this.notes.next([...newStore]);
    _.debounce(this.synchronizeWithLocalStorage, 2500);
  }

  public getItemById(id: string) {
    return this.notes.pipe(
      find(notes => notes === notes.filter(element => {
        return element.id === id;
      }))
    );
  }

  public getItemsByUserId(userId: string) {
    return this.notes.pipe(
      filter(notes => notes === notes.filter(element => {
        return element.userId === userId;
      }))
    );
  }

  public getItemsByDate(date: Date) {
    return this.notes.pipe(
      filter(notes => notes === notes.filter(element => {
        return element.date === date;
      }))
    );
  }

  public getItemsBefore(date: Date) {
    return this.notes.pipe(
      filter(notes => notes === notes.filter(element => {
        return element.date.valueOf() < date.valueOf();
      }))
    );
  }

  public getItemsAfter(date: Date) {
    return this.notes.pipe(
      filter(notes => notes === notes.filter(element => {
        return element.date.valueOf() >= date.valueOf();
      }))
    );
  }

  public synchronizeWithLocalStorage() {
    this.notes.subscribe(data => this.mdService.updateNotesToLocalStorage(data));
  }
}
