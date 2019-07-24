import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { listItem } from '../../../animations'

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
  animations: [
    listItem
  ]
})
export class ListHeaderComponent implements OnInit {

  @Input()
  canAddListItem = false;

  @Input()
  headerTitle = '';

  @Input()
  route = '';

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
