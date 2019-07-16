import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {

  @Input()
  canAddListItem: boolean = false;

  @Input()
  headerTitle: string = "";

  @Output()
  popupOpenEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openPopup() {
    this.popupOpenEvent.emit(true);
  }
}
