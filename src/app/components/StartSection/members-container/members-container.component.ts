import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/Models/user';
import { Router } from '@angular/router';
import { fadeIn, ShowOpacity } from 'src/app/animations';


@Component({
  selector: 'app-members-container',
  templateUrl: './members-container.component.html',
  styleUrls: ['./members-container.component.scss'],
  animations: [fadeIn, ShowOpacity]

})
export class MembersContainerComponent implements OnInit {

  users: User[] = [];

  infoToLogin;
  inputReset = '';
  displayLoginPanel = true;
  isDisabled = true;
  btnInnerText = 'Insert PIN';
  btnState = 'inactive';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getItems().subscribe(users => this.users = [...users]);
    this.logOutUser();
  }

  formReset() {
    this.inputReset = '';
    this.isDisabled = true;
    this.btnInnerText = 'Insert PIN';
    this.btnState = 'inactive';
  }

  getLoginData(userData) {
    this.infoToLogin = userData;
    this.displayLoginPanel = false;
    this.formReset();
  }

  setBtnStatus(status?: string) {
    switch (status) {
      case 'correct':
        this.isDisabled = false;
        this.btnInnerText = 'Correct! Logged in.';
        return '#60d149';
      case 'wrong':
        this.isDisabled = true;
        this.btnInnerText = 'Wrong PIN. Try again.';
        return '#d14949';
      case 'inactive':
        this.isDisabled = true;
        this.btnInnerText = '';
        return '#5F7891';
    }
  }

  verifyPIN(event) {
    if (event.target.value.length === 4 && (event.target.value === this.infoToLogin.pin)) {
      this.btnState = 'correct';
      setTimeout(() => {
        this.logIn(this.infoToLogin);
      }, 500);
    } else if (event.target.value.length < 4) {
      this.btnState = 'inactive';
    } else {
      this.btnState = 'wrong';
    }
  }

  logIn(user) {
    user.isLogged = true;
    this.userService.updateItem(user);
    this.router.navigate(['/main']);
  }

  logOutUser() {
    let usersToLogOut = [];
    this.userService.getItems().subscribe((users) => usersToLogOut = [...users]);
    usersToLogOut.forEach((user) => {
      if (user.isLogged) {
        user.isLogged = false;
        this.userService.updateItem(user);
      } else {
        return '';
      }
    });
  }
}
