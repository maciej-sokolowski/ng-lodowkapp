import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {listItem} from '../../../animations';
import {Activity} from '../../../interfaces/Models/activity';
import {Note} from '../../../interfaces/Models/note';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
  animations: [
    listItem
  ]
})
export class ListHeaderComponent implements OnInit {

  constructor() {
  }

  @Input() canAddListItem = false;
  @Input() headerTitle = '';
  @Input() route = '';
  @Output() popupOpenEvent = new EventEmitter();
  @Input() items: Activity[] | Note[];

  openPopup() {
    this.popupOpenEvent.emit(true);
  }


  ngOnInit() {
  }


}
