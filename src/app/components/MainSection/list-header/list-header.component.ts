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

  @Input()
  items: any;

  constructor() { }


  ngOnInit() {
  }


}
