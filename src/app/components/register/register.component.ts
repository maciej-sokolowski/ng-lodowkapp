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

  constructor() {

  }

  ngOnInit() {

  }

  setButtonStatus() {
    if (this.userNamee == undefined || this.userColor == undefined) {
      this.btnIsDisabled = true;
    } else {
      this.btnIsDisabled = false;
    }
  }

  onClickPrev() {
    this.setButtonStatus();
    this.registerStep--;
    console.log('prev', this.registerStep, this.userNamee, this.userColor);

  }
  onClickNext() {
    this.setButtonStatus();
    this.registerStep++;
    console.log('next', this.registerStep, this.userNamee, this.userColor);

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
    this.setButtonStatus();
  }

}
