import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/interfaces/Models/user';

@Component({
  selector: 'app-members-container',
  templateUrl: './members-container.component.html',
  styleUrls: ['./members-container.component.scss']
})
export class MembersContainerComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getItems().subscribe(users => this.users = [...users]);
  }

}
