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
  private personType;
  btnSwitch: Array<Number> = [0];

  btnNextText = 'Next';

  constructor(private userService: UserService) {
  }

  ngOnInit() {

  }
  userParent() {
    this.personType = "PARENT";
  }
  userChild() {
    this.personType = "CHILDREN";
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
  activateBtn() {
    this.btnIsDisabled = false;
    this.btnSwitch.push(this.registerStep);
  }

  onClickPrev() {
    this.registerStep--;
    this.setButtonStatus(this.registerStep);
    if (this.registerStep < 0) {
      this.registerStep = 0; //out to /start path
      return;
    } else if (this.registerStep == 2) {
      this.btnNextText = 'Next';
    }
  }

  onClickNext() {
    this.registerStep++;
    this.setButtonStatus(this.registerStep);
    if (this.registerStep == 4) {
      if (this.personType == undefined) {
        this.userParent();
      }
      let agregatedInfo = { id: '1', type: this.personType, name: this.userNamee, avatar: this.userAvatar, color: this.userColor };
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
    this.activateBtn();
  }

  getAvatar(avatar: string) {
    this.userAvatar = avatar;
    this.activateBtn();
  }

  registerInfo(userInfo: User) {
    this.userService.insertItem(userInfo); //push user to store and  out to /start path
  }
}
