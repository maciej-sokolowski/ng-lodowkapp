import { Component, OnInit } from '@angular/core';
// import { emit } from 'cluster';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isOpen: boolean;
  emitIsSmallWidget: boolean;
  emitLargeWidgetsList = ["Canvas", "Activities", "Products", "Notes"];
  emitSmallWidgetsList =["Youtube - Tasty chanel", "Weather"];

  constructor() { }

  ngOnInit() {
  }

  initList() {
    let target = <HTMLInputElement>event.target;
    console.log(target);

    console.log(target.parentElement.getAttribute("id"));
    if (target.parentElement.getAttribute("id") === "widget-4" || target.parentElement.getAttribute("id") === "widget-5") {
      console.log("mały");
      this.emitIsSmallWidget = true;
      if (this.emitSmallWidgetsList.length === 0) {
        return;
      }
    } else {
      this.emitIsSmallWidget = false;
      if (this.emitLargeWidgetsList.length === 0) {
        return;
      }
    }
    this.isOpen = true;
  }

  onClose(event) {
    this.isOpen = false;
    console.log(event)
    if (event[1] === "small") {
      this.emitSmallWidgetsList.splice(event[0], 1);
    } else {
      this.emitLargeWidgetsList.splice(event[0], 1);
    }
    console.log(this.emitLargeWidgetsList)
    console.log(this.emitSmallWidgetsList)
  }
}
