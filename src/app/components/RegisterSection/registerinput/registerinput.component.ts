import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fadeIn, ShowOpacity } from 'src/app/animations';

@Component({
  selector: 'app-registerinput',
  templateUrl: './registerinput.component.html',
  styleUrls: ['./registerinput.component.scss'],
  animations: [fadeIn, ShowOpacity]
})
export class RegisterinputComponent implements OnInit {

  @Input()
  userName: string;

  @Output()
  emitName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitUserName(event) {
    this.userName = event.target.value;
    this.emitName.emit(this.userName);
  }
}
