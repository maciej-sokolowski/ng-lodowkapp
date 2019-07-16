import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input()
  message = '';


  @Output()
  popupCloseEvent = new EventEmitter();

  closePopup() {
    this.popupCloseEvent.emit(false);
  }

  id = '5';
  userId = '1';
  date: Date = new Date();
  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  addNote() {
    const note = {
      id: this.id,
      userId: this.userId,
      date: this.date,
      message: this.message
    }
    this.noteService.insertItem(note); //push note to store and out to /start path
  }

  @Output()
  emitNote = new EventEmitter();

  emitNoteMessage(event) {
    this.message = event.target.value;
    this.emitNote.emit(this.message);
  }

}
