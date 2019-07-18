import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/Models/user';
import { Router } from '@angular/router';

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
  btnState: string = 'inactive';

  constructor(private userService: UserService, public router: Router) {
  }

  ngOnInit() {
    this.userService.getItems().subscribe(users => this.users = [...users]);
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
    console.log(userData);
  }

  setBtnStatus(status?: string) {
    switch (status) {
      case 'correct':
        this.isDisabled = false;
        this.btnInnerText = 'Correct! Click to log in';
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
      this.btnState = 'correct'
      setTimeout(() => {
        this.logIn();
      }, 500);
    } else if (event.target.value.length < 4) {
      this.btnState = 'inactive'
    } else {
      this.btnState = 'wrong'
    }
  }
  logIn() {
    this.router.navigate(['/main'], { state: [this.infoToLogin] });
  }
}
