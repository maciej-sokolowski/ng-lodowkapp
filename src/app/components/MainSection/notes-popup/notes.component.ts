import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { UserService } from '../../../services/user.service';

import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input()
  message: string = "";

  @Output()
  popupCloseEvent = new EventEmitter();

  closePopup() {
    this.popupCloseEvent.emit(false);
  }


  id = UUID.UUID();
  userId: string;
  date = Date.now();
  placeholderId: string;
  target: any;
  constructor(private noteService: NoteService, private userService: UserService) { }

  ngOnInit() {
    this.getUserId()
  }

  getUserId() {
    this.userId = this.userService.getLoggedUser()[0].id
  }

  addNote() {
    const note = {
      id: this.id,
      userId: this.userId,
      date: this.date,
      message: this.message
    }

    if (this.message) {
      this.noteService.insertItem(note);
    }
  }

  @Output()
  emitNote = new EventEmitter();

  emitNoteMessage(event) {
    this.message = event.target.value;
    this.emitNote.emit(this.message);
  }

}
