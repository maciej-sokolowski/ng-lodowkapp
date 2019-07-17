import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {

  @Input()
  canAddListItem = false;

  @Input()
  headerTitle = "";

  @Input()
  route = "";

  @Output()
  popupOpenEvent = new EventEmitter();

  openPopup() {
    this.popupOpenEvent.emit(true);
  }
  constructor(private noteService: NoteService) { }

  notes: any;

  ngOnInit() {
    this.getNotes();
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
}
