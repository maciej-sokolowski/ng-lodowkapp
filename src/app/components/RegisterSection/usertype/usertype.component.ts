import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.scss']
})
export class UsertypeComponent implements OnInit {

  private person: string;

  @Output()
  emitUserType = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  choseUserType(value: string) {
    this.emitUserType.emit(value);
  }

  userParent() {
    this.person = "PARENT";
    this.choseUserType(this.person);
  }

  userChild() {
    this.person = "CHILDREN";
    this.choseUserType(this.person);
  }
}
