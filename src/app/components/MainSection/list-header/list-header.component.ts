import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Input()
  counter = "";

  @Output()
  popupOpenEvent = new EventEmitter();

  openPopup() {
    this.popupOpenEvent.emit(true);
  }
  constructor() { }

  ngOnInit() {
  }


}
