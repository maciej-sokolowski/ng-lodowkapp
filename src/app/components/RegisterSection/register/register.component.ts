import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerStep: number = 0;
  btnIsDisabled: boolean = true;

  // tu zbiera dane
  userNamee = '';
  userColor: string;
  userAvatar: string;
  btnSwitch: Array<Number> = [0];

  btnNextText = 'Next';

  constructor(private userService: UserService) {
  }

  ngOnInit() {

  }

  setButtonStatus(step) {
    if (this.btnSwitch.includes(step)) {
      this.btnIsDisabled = false;
    } else if (this.registerStep == 3) {
      this.btnNextText = 'Confirm and add family member';
      this.btnIsDisabled = false;
    }
    else {
      this.btnIsDisabled = true;
    }
  }

  onClickPrev() {
    this.registerStep--;
    this.setButtonStatus(this.registerStep);
    if (this.registerStep < 0) {
      this.registerStep = 0;
      console.log('out');
      //tu należy wywołać funkcję do wyjścia do głównego widoku.
      return;
    } else if (this.registerStep == 2) {
      this.btnNextText = 'Next';
    }
  }

  onClickNext() {
    this.registerStep++;
    this.setButtonStatus(this.registerStep);
    if (this.registerStep == 4) {
      let agregatedInfo = { id: '1', name: this.userNamee, avatar: this.userAvatar, color: this.userColor };
      this.registerInfo(agregatedInfo);
    }
  }

  getName(user: string) {
    if (user.length > 0) {
      this.btnIsDisabled = false;
      this.userNamee = user;
    } else if (user.length === 0) {
      this.btnIsDisabled = true;
    }
  }

  getColor(color: string) {
    this.userColor = color;
    this.btnIsDisabled = false;
    this.btnSwitch.push(this.registerStep);
  }

  getAvatar(avatar: string) {
    this.userAvatar = avatar;
    this.btnIsDisabled = false;
    this.btnSwitch.push(this.registerStep);
  }

  registerInfo(userInfo: User) {
    console.log(userInfo, 'cały user');
    this.userService.insertItem(userInfo);
  }
}
