import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NoteService } from '../../../services/note.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isPopupOpen: boolean;
  isStringShow: any;

  onPopupStatusChange(value: boolean) {
    this.isPopupOpen = value;
  }

  constructor(private noteService: NoteService) { }

  @Input()
  notes: any;

  headerTitle = "";

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

    this.headerTitle = this.notes.length + ' notes';
  }
}
