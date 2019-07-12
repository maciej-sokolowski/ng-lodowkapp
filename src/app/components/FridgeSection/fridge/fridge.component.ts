import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})
export class FridgeComponent implements OnInit {

  isCameraVisible: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  setCameraVisible() {
    this.isCameraVisible = true;
  }

  setListVisible() {
    this.isCameraVisible = false;
  }

}
