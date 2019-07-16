import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {
  // title: string;

  @Input()
  canAddListItem: boolean = false;

  @Input()
  noteTitle: string = "";



  constructor() { }

  ngOnInit() {

  }


}
