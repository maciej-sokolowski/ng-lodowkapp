import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Note} from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public notes = new BehaviorSubject(Array<Note>());

  constructor() {
  }

  public getItems() {
    return this.notes;
  }

  public insertItem(note: Note) {
    this.notes.next([...this.notes.getValue(), note]);
  }

  public updateItem(note: Note) {
    const newStore = this.notes.getValue().filter((element) => {
      return element.id !== note.id;
    });
    this.notes.next([...newStore, note]);
  }

  public deleteItem(note: Note) {
    const newStore = this.notes.getValue().filter((element) => {
      return element.id !== note.id;
    });
    this.notes.next([...newStore]);

  }
}
