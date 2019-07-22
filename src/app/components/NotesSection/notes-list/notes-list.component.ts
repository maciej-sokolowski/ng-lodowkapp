import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor(private noteService: NoteService, private userService: UserService) { }

  notes: any;
  userId: string;


  ngOnInit() {
    this.getNotes();
  }

  ngDoCheck() {
    this.getNotes();
  }

  getNotes() {
    this.userId = this.userService.getLoggedUser()[0].id

    const tempNotes = this.noteService.getItemsByUserId(this.userId)

    const sortedNotes = tempNotes.sort(function (firstNote, secondNote) {
      return firstNote.date > secondNote.date ? -1 : firstNote.date < secondNote.date ? 1 : 0;
    });
    this.notes = sortedNotes;
  }

  deleteNote(note: any) {
    this.noteService.deleteItem(note);
  }
}