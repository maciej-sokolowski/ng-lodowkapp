import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivityService} from '../../../services/activity.service';
import {NoteService} from '../../../services/note.service';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {

  constructor(private userService: UserService, private activitysService: ActivityService,
              private noteService: NoteService) {
  }

  notes: any;
  products: any;
  userId: string;
  activities: any;

  getActivities() {
    this.userId = this.userService.getLoggedUser()[0].id;

    const tempActNote = this.activitysService.getItemsByUserId(this.userId);

    const tempActFridge = this.activitysService.getItemsByUserId('FRIDGE');

    const notSortedActivities = tempActNote.concat(tempActFridge);

    const sortedActivities = notSortedActivities.sort((firstActi, secondActi) => {
      return firstActi.date > secondActi.date ? -1 : firstActi.date < secondActi.date ? 1 : 0;
    });

    this.activities = sortedActivities;
  }


  ngOnInit() {
    this.getActivities();
  }

}
