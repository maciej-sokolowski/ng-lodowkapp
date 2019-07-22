import {Component, OnInit} from '@angular/core';

enum ActiveView {
  Fridge = 1,
  List = 2,
}

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})

export class FridgeComponent implements OnInit {

  active = ActiveView.List;

  constructor() {
  }

  ngOnInit() {
  }

  setCameraVisible() {
    this.active = ActiveView.Fridge;
  }

  setListVisible() {
    this.active = ActiveView.List;
  }

}
