import {UserService} from 'src/app/services/user.service';
import {NoteService} from '../../../services/note.service';
import {ActivityService} from '../../../services/activity.service';
import {Component, OnInit, Input} from '@angular/core';
import {WidgetMemoryService} from '../../../services/widget-memory.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isOpen: boolean;
  emitIsSmallWidget: boolean;
  emitLargeWidgetsList = ['Canvas', 'Activities', 'Products', 'Notes'];
  emitSmallWidgetsList = ['Youtube', 'Weather'];
  placeholderId: string;
  target: any;
  currentUser;
  displayMenu: boolean = true;
  isPopupOpen: boolean;
  headerTitleNotes: string;
  headerTitleActivities: string;
  widgets: object;


  @Input()
  notes: any;
  activities: any;
  products: any;

  constructor(private userService: UserService, private noteService: NoteService,
              private activitysService: ActivityService, private widgetMemo: WidgetMemoryService) {
    widgetMemo.getWidgetsSet().subscribe(set => this.widgets = set);

  }

  onPopupStatusChange(value: boolean) {
    this.isPopupOpen = value;
  }


  ngOnInit() {
    this.getLoggedUser();
    this.getNotes();
    this.getActivities();
    this.checkPlaceholders();
  }

  getLoggedUser() {
    this.userService.getItems().subscribe((users) => {
      this.currentUser = users.filter(user => user.isLogged === true);
    });
  }

  userId = this.userService.getLoggedUser()[0].id;

  getNotes() {
    const notSortedNotes = this.noteService.getItemsByUserId(this.userId);

    const sortedNotes = notSortedNotes.sort(function(firstNote, secondNote) {
      return firstNote.date > secondNote.date ? -1 : firstNote.date < secondNote.date ? 1 : 0;
    });
    this.notes = sortedNotes;

    this.headerTitleNotes = this.notes.length + ' notes';
  }

  getActivities() {
    const tempActNote = this.activitysService.getItemsByUserId(this.userId);

    const tempActFridge = this.activitysService.getItemsByUserId('FRIDGE');

    const notSortedActivities = tempActNote.concat(tempActFridge);

    const sortedActivities = notSortedActivities.sort(function(firstActi, secondActi) {
      return firstActi.date > secondActi.date ? -1 : firstActi.date < secondActi.date ? 1 : 0;
    });

    this.activities = sortedActivities;

    this.headerTitleActivities = 'Latest activities';
  }


  initList() {
    this.target = <HTMLInputElement> event.target;
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

    this.widgets[this.placeholderId] = widgetToAssign;
    this.widgetMemo.updateWidgetSet(this.widgets);

    widgetPlaceholder.removeChild(placeholderSpan);
    widgetPlaceholder.removeChild(placeholderDescription);
    widgetPlaceholder.style.border = 'none';                   // 3 linijki wyżej
    widgetPlaceholder.style.opacity = '1';
  }


  checkPlaceholders() {
    const placeholderIdArray = ['widget-1', 'widget-2', 'widget-3', 'widget-4', 'widget-5', 'widget-6'];
    placeholderIdArray.forEach(placeholderId => {
      const widgetPlaceholder = document.getElementById(placeholderId);
      const placeholderSpan = widgetPlaceholder.childNodes[0];
      const placeholderDescription = widgetPlaceholder.childNodes[1];
      if (this.widgets[placeholderId] !== '') {
        widgetPlaceholder.removeChild(placeholderSpan);
        widgetPlaceholder.removeChild(placeholderDescription);
        widgetPlaceholder.style.border = 'none';                   // 3 linijki wyżej
        widgetPlaceholder.style.opacity = '1';

      }
    });
  }


  contextMenu(event) {
    this.displayMenu = !this.displayMenu;
  }
}
