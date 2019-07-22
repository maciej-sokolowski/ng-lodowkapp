import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { ActivityService } from '../../../services/activity.service';


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
  currentUser;
  displayMenu: boolean = true;
  isPopupOpen: boolean;
  headerTitleNotes: string;
  headerTitleActivities: string;
  userId: string;


  @Input()
  notes: any;
  activities: any;
  products: any;



  // widgets = {
  //   "Canvas": "app-weather",
  //   "Activities": "app-weather",
  //   "Products": "app-weather",
  //   "Notes": "app-weather",
  //   "Youtube - Tasty chanel": "app-weather",
  //   "Weather": "app-weather",
  // }

  widgets = {
    'widget-1': '',
    'widget-2': '',
    'widget-3': '',
    'widget-4': '',
    'widget-5': '',
    'widget-6': '',
    'widget-7': '',
  };

  ngOnInit() {
    this.getLoggedUser();
    this.getNotes();
    this.getActivities();
  }

  ngDoCheck() {
    this.getNotes();
    this.getActivities();
  }

  constructor(private userService: UserService, private noteService: NoteService,
    private activitysService: ActivityService) { }

  onPopupStatusChange(value: boolean) {
    this.isPopupOpen = value;
  }


  getLoggedUser() {
    this.userService.getItems().subscribe((users) => {
      this.currentUser = users.filter(user => user.isLogged === true)
    })
  }

  getNotes() {
    this.userId = this.userService.getLoggedUser()[0].id

    const tempNotes = this.noteService.getItemsByUserId(this.userId)

    const sortedNotes = tempNotes.sort(function (firstNote, secondNote) {
      return firstNote.date > secondNote.date ? -1 : firstNote.date < secondNote.date ? 1 : 0;
    });
    this.notes = sortedNotes;

    this.headerTitleNotes = this.notes.length + ' notes';
  }

  getActivities() {
    this.userId = this.userService.getLoggedUser()[0].id

    this.products = this.activitysService.getItems().getValue();

    const notSortedActivities = this.notes.concat(this.products);

    const sortedActivities = notSortedActivities.sort(function (firstNote: { date: number; }, secondNote: { date: number; }) {
      return firstNote.date > secondNote.date ? -1 : firstNote.date < secondNote.date ? 1 : 0;
    });

    this.activities = sortedActivities;

    this.headerTitleActivities = 'Latest activities';
  }




  initList() {
    this.target = <HTMLInputElement>event.target;
    this.placeholderId = this.target.parentElement.getAttribute('id');

    if (this.placeholderId === 'widget-4' || this.placeholderId === 'widget-5') {
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

    if (getEmiter[1] === 'small') {
      widgetToAssign = this.emitSmallWidgetsList[getEmiter[0]];
      this.emitSmallWidgetsList.splice(getEmiter[0], 1);
    } else {
      widgetToAssign = this.emitLargeWidgetsList[getEmiter[0]];
      this.emitLargeWidgetsList.splice(getEmiter[0], 1);
    }

    let widgetPlaceholder = document.getElementById(this.placeholderId);
    let placeholderSpan = widgetPlaceholder.childNodes[0];
    let placeholderDescription = widgetPlaceholder.childNodes[1];

    widgetPlaceholder.removeChild(placeholderSpan);
    widgetPlaceholder.removeChild(placeholderDescription);
    widgetPlaceholder.style.border = 'none';
    // while (widgetPlaceholder.firstChild) {
    //   widgetPlaceholder.removeChild(widgetPlaceholder.firstChild);
    // }
    // console.log(this.placeholderId)
    // console.log(widgetToAssign);
    // console.log(widgetPlaceholder)

    this.widgets[this.placeholderId] = widgetToAssign;
    // console.log(this.widgets);

    // widgetToAssign = this.widgets[widgetToAssign];
    // console.log(widgetToAssign)
  }
  contextMenu(event) {
    this.displayMenu = !this.displayMenu;
  }
}
