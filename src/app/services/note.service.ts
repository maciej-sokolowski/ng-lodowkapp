import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Note} from '../interfaces/Models/note';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';
import {StoreManager} from '../interfaces/store-manager';


@Injectable({
  providedIn: 'root'
})
export class NoteService implements StoreManager<Note> {

  public notes: BehaviorSubject<Note[]> = new BehaviorSubject([]);

  constructor(private mdService: ManageDataService) {
    const data: Note[] = mdService.getNotesFromLocalStorage();
    if (data !== null) {
      this.notes.next(data);
    }
  }

  public getItems() {
    return this.notes;
  }

  public insertItem(note: Note) {
    this.notes.next([...this.notes.getValue(), note]);
    this.synchronizeWithLocalStorage();
  }

  public updateItem(note: Note) {
    const newStore = this.notes.getValue().filter((element) => {
      return element.id !== note.id;
    });
    this.notes.next([...newStore, note]);
    this.synchronizeWithLocalStorage();
  }

  public deleteItem(note: Note) {
    const newStore = this.notes.getValue().filter((element) => {
      return element.id !== note.id;
    });
    this.notes.next([...newStore]);
    this.synchronizeWithLocalStorage();
  }

  private synchronizeWithLocalStorage() {
    _.debounce(() => this.mdService.updateNotesToLocalStorage(this.notes.getValue()), 2500)();
  }

  public getItemsByUserId(userId: string) {
    return this.notes.getValue().filter(element => element.userId === userId);
  }

}
