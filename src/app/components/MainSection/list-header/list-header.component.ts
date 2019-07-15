import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {
  title = "Notes";
  showList = "View all";

  @Input()
  canAddListItem: boolean = false;

  constructor() { }

  ngOnInit() {

  }


}
