import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-color-component',
  templateUrl: './color-component.component.html',
  styleUrls: ['./color-component.component.scss']
})

export class ColorComponentComponent implements OnInit {

  @Output() onColorChoose = new EventEmitter<string>();

  colors = ['blue', 'lightblue', 'green', 'orange', 'purple', 'pink']

  constructor() {
  }

  ngOnInit() {

  }

  chooseColor(color: string): void {
    this.chosenColor = color;
    this.onColorChoose.emit(color);
  }

}
