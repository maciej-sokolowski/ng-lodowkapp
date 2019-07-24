import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { fadeIn, ShowOpacity } from 'src/app/animations';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  animations: [fadeIn, ShowOpacity]
})
export class ColorComponent implements OnInit {

  @Input()
  chosenColor: string;
  @Output() emitColor = new EventEmitter<string>();

  colors = ['blue', 'lightblue', 'green', 'orange', 'purple', 'pink']

  constructor() { }

  ngOnInit() {
  }

  chooseColor(color: string): void {
    this.chosenColor = color;
    this.emitColor.emit(color);
  }
}
