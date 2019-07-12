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
    this.isOpen = true;
    

    console.log(event.target.parentElement.getAttribute("id"));
    if (event.target.parentElement.getAttribute("id") === "widget-4" || event.target.parentElement.getAttribute("id") === "widget-5") {
      console.log("mały");
      this.emitIsSmallWidget = true;
    } else {
      this.emitIsSmallWidget = false;
    }
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
