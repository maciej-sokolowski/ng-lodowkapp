import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerStep: number = 0;
  userInfo: User;
  btnIsDisabled: boolean = true;

  // tu zbiera dane
  userNamee = '';
  userColor: string;
  userAvatar: string;

  constructor() {

  }

  ngOnInit() {

  }

  setButtonStatus() {
    let array = [this.userNamee, this.userColor, this.userAvatar];
    console.log(array[this.registerStep], this.registerStep);
    if (array[this.registerStep] == undefined) {
      this.btnIsDisabled = true;

    } else {
      this.btnIsDisabled = false;
    }
  }

  onClickPrev() {
    this.registerStep--;
    if (this.registerStep < 0) {
      this.registerStep = 0;
    }
    this.setButtonStatus();
  }
  onClickNext() {
    this.registerStep++;
    this.setButtonStatus();
  }

  getName(user: string) {
    console.log(user.length, 'z emmitera');
    if (user.length > 0) {
      this.btnIsDisabled = false;
      this.userNamee = user;
    } else if (user.length == 0) {
      this.btnIsDisabled = true;
    }
  }

  getColor(color: string) {
    this.userColor = color;
    console.log(color, 'z emmitera');
    this.btnIsDisabled = false;
  }

  getAvatar(avatar: string) {
    this.userAvatar = avatar;
    console.log(avatar, 'z emmitera');
    this.btnIsDisabled = false;
  }
}
