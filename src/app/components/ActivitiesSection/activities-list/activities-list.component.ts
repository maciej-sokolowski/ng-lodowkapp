import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivityService } from '../../../services/activity.service';
import { NoteService } from '../../../services/note.service';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {

  constructor(private userService: UserService, private activitysService: ActivityService,
    private noteService: NoteService) { }
  notes: any;
  products: any;
  userId: string;
  activities: any;

  getActivities() {
    this.userId = this.userService.getLoggedUser()[0].id

    this.notes = this.noteService.getItemsByUserId(this.userId)
    this.products = this.activitysService.getItems().getValue();

    const notSortedActivities = this.notes.concat(this.products);

    const sortedActivities = notSortedActivities.sort(function (firstNote: { date: number; }, secondNote: { date: number; }) {
      return firstNote.date > secondNote.date ? -1 : firstNote.date < secondNote.date ? 1 : 0;
    });

    this.activities = sortedActivities;
  }


  ngOnInit() {
    this.getActivities();
  }

}
