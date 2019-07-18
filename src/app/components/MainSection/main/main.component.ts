import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Models/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isOpen: boolean;
  emitIsSmallWidget: boolean;
  emitLargeWidgetsList = ["Canvas", "Activities", "Products", "Notes"];
  emitSmallWidgetsList = ["Youtube", "Weather"];
  placeholderId: string;
  target: any;

  currentUser: User;

  // widgets = {
  //   "Canvas": "app-weather",
  //   "Activities": "app-weather",
  //   "Products": "app-weather",
  //   "Notes": "app-weather",
  //   "Youtube - Tasty chanel": "app-weather",
  //   "Weather": "app-weather",
  // }

  widgets = {
    "widget-1": "",
    "widget-2": "",
    "widget-3": "",
    "widget-4": "",
    "widget-5": "",
    "widget-6": "",
    "widget-7": "",
  }

  constructor() { }

  ngOnInit() {
    this.currentUser = history.state[0];
  }

  initList() {
    this.target = <HTMLInputElement>event.target;
    console.log(this.target)
    this.placeholderId = this.target.parentElement.getAttribute("id");
    console.log(this.placeholderId)

    if (this.placeholderId === "widget-4" || this.placeholderId === "widget-5") {
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

  onClose(getEmiter) {
    this.isOpen = false;
    let widgetToAssign: string;

    if (getEmiter[1] === "small") {
      widgetToAssign = this.emitSmallWidgetsList[getEmiter[0]];
      // console.log(widgetToAssign)
      this.emitSmallWidgetsList.splice(getEmiter[0], 1);
    } else {
      widgetToAssign = this.emitLargeWidgetsList[getEmiter[0]];
      // console.log(widgetToAssign)
      this.emitLargeWidgetsList.splice(getEmiter[0], 1);
    }

    let widgetPlaceholder = document.getElementById(this.placeholderId);
    let placeholderSpan = widgetPlaceholder.childNodes[0];
    let placeholderDescription = widgetPlaceholder.childNodes[1];

    widgetPlaceholder.removeChild(placeholderSpan);
    widgetPlaceholder.removeChild(placeholderDescription);
    widgetPlaceholder.style.border = "none";
    // while (widgetPlaceholder.firstChild) {
    //   widgetPlaceholder.removeChild(widgetPlaceholder.firstChild);
    // }
    // console.log(this.placeholderId)
    // console.log(widgetToAssign);
    // console.log(widgetPlaceholder)

    this.widgets[this.placeholderId] = widgetToAssign;
    console.log(this.widgets)

    // widgetToAssign = this.widgets[widgetToAssign];
    // console.log(widgetToAssign)
  }
}
