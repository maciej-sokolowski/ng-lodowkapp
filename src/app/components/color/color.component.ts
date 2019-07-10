import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  // @Output() onColorChoose = new EventEmitter<string>(); // Wysyłanie infromacji do rodzica

  colors = ['blue', 'lightblue', 'green', 'orange', 'purple', 'pink']

  constructor() { }

  ngOnInit() {
  }
  private chosenColor: string;

  chooseColor(color: string): void {
    this.chosenColor = color;
    // this.onColorChoose.emit(color); // Wysyłanie inforamcji do rodzica
  }

}
