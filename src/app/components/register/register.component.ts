import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerStep: number = 1;
  userInfo: User;
  btnIsDisabled: boolean = true;

  // tu zbiera dane
  userNamee = "";
  userColor: string;
  userAvatar: string;

  logicArray: Array<boolean>;

  constructor() {

  }

  ngOnInit() {

  }

  setButtonStatus() {
    if (this.registerStep)
      this.btnIsDisabled = true;
    console.log(this.btnIsDisabled);

  }

  onClickPrev() {

    this.registerStep--;
    console.log('prev', this.registerStep, this.userNamee, this.userColor, this.userAvatar);

  }
  onClickNext() {
    this.setButtonStatus();
    this.registerStep++;
    console.log('next', this.registerStep, this.userNamee, this.userColor, this.userAvatar);

  }

  getName(user: string) {
    console.log(user.length, "z emmitera");
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
