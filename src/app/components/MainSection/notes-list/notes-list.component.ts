import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  notes: any;
  notesLenght: number;

  ngOnInit() {
    this.getNotes();
    console.log(this.notes)
  }



  ngDoCheck() {
    this.getNotes();
  }

  getNotes() {
    const tempNotes = this.noteService.getItems().getValue();

    const sortedNotes = tempNotes.sort(function (firstNote, secondNote) {
      return firstNote.date > secondNote.date ? -1 : firstNote.date < secondNote.date ? 1 : 0;
    });
    this.notes = sortedNotes;
  }

  deleteNote(note: any) {
    this.noteService.deleteItem(note);
  }

  // @Output()
  // emitLength = new EventEmitter();

  // notesCounter() {
  //   this.notesLenght = this.notes.length;
  //   this.emitLength.emit(this.notesLenght)
  //   console.log(this.emitLength)
  // }
}