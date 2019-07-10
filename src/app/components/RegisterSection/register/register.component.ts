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

  btnNextText = "Next";

  constructor() {

  }

  ngOnInit() {

  }

  setButtonStatus() {
    let array = [this.userNamee, this.userColor, this.userAvatar, "summary"];
    console.log(array[this.registerStep], this.registerStep);
    if (array[this.registerStep] == undefined) {
      this.btnIsDisabled = true;

    } else if (this.registerStep == 3) {
      this.btnIsDisabled = false;
      this.btnNextText = "Confirm and add family member";
    }
    else {
      this.btnIsDisabled = false;
    }
  }

  onClickPrev() {
    this.registerStep--;
    if (this.registerStep < 0) {
      this.registerStep = 0;

      console.log('out');
      //tu należy wywołać funkcję do wyjścia do głównego widoku.
      return;
    } else if (this.registerStep == 2) {
      this.btnNextText = "Next";
    }
    this.setButtonStatus();
  }
  onClickNext() {
    this.registerStep++;

    if (this.registerStep == 4) {
      console.log('stworzono użytkownika');

      //tu dajemy funkcję końcową
    }

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
