import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/Models/user';

@Component({
  selector: 'app-members-container',
  templateUrl: './members-container.component.html',
  styleUrls: ['./members-container.component.scss']
})
export class MembersContainer implements OnInit {

  users = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.createCards();
  }

  createCards() {
    if (this.userService.users.value.length === 0) {
      console.log('brak');
      return;
    } else {
      this.users = [...this.userService.users.value];
    }
  }
}
