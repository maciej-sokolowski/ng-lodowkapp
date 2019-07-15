import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registerinput',
  templateUrl: './registerinput.component.html',
  styleUrls: ['./registerinput.component.scss']
})
export class RegisterinputComponent implements OnInit {

  @Input()
  userName: string;

  @Output()
  emitName = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitUserName(event) {
    this.userName = event.target.value;
    this.emitName.emit(this.userName);
  }
}
