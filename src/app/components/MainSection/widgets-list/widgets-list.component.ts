import { Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent implements OnInit {

  // largeWidgetsList = ["Canvas", "Activities", "Products", "Notes"]
  // smallWidgetsList = ["Youtube - Tasty chanel", "Weather"]
  
  @Input() isSmallWidget: boolean;
  @Input() largeWidgets: Array<string>;
  @Input() smallWidgets: Array<string>;

  @Output() emitClose = new EventEmitter();
 

  constructor() { }

  ngOnInit() {
  }

  chooseWidget() {
    let currentWidget = event.target.innerText;
    let widgetOnList: number;
    let emiter: any;
    if (this.isSmallWidget) {
      widgetOnList = this.smallWidgets.indexOf(currentWidget);
      emiter = [widgetOnList, "small"]
    } else {
      widgetOnList = this.largeWidgets.indexOf(currentWidget);
      emiter = [widgetOnList, "large"]
    }
    this.emitClose.emit(emiter);
    // console.log(this.largeWidgetsList);
    // this.largeWidgetsList.splice(widgetOnList, 1);
    // console.log(this.largeWidgetsList);
  }

}
