import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/Models/user';

@Component({
  selector: 'app-members-container',
  templateUrl: './members-container.component.html',
  styleUrls: ['./members-container.component.scss']
})
export class MembersContainerComponent implements OnInit {

  users: User[] = [];

  infoToLogin;
  inputReset: string = '';
  displayLoginPanel: boolean = true;
  isDisabled: boolean = true;
  btnInnerText: string = "Insert PIN";

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getItems().subscribe(users => this.users = [...users]);
  }

  formReset() {
    this.inputReset = '';
    this.isDisabled = true;
    this.btnInnerText = 'Insert PIN';
  }

  getLoginData(userData) {
    this.infoToLogin = userData;
    this.displayLoginPanel = false;
    this.formReset();
    console.log(userData);
  }

  verifyPIN(event) {
    if (event.target.value.length === 4) {
      setTimeout(() => {
        if (event.target.value === this.infoToLogin.pin) {
          this.isDisabled = false;
          this.btnInnerText = 'Correct! Click to log in';
        }
        else {
          this.isDisabled = true;
          this.btnInnerText = 'Wrong PIN. Try again.';
        }
      }, 500);
    } else if (event.target.value.length < 4) {
      this.isDisabled = true;
      this.btnInnerText = 'Insert PIN';
    }
  }
  logIn() {
    alert(`${this.infoToLogin.name} zaloguj (tu dalej trzeba przejąć id usera i wejść do dashboardu)`);
  }
}
