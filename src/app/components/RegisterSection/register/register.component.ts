import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Models/user';
import { UserService } from 'src/app/services/user.service';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../registerinput/registerinput.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerStep: number = 0;
  btnIsDisabled: boolean = true;

  // tu zbiera dane
  userNamee = '';
  userColor: string;
  userAvatar: string;
  userPIN: string = '';
  private personType;
  btnSwitch: Array<Number> = [0];

  btnNextText = 'Next';

  constructor(private userService: UserService) {
  }

  ngOnInit() {

  }

  setButtonStatus(step: number) {
    if (this.btnSwitch.includes(step)) {
      this.btnIsDisabled = false;
      if (this.registerStep === 1 && this.userNamee.length === 0) {
        this.btnIsDisabled = true;
      }
    } else if (this.registerStep === 4 && this.userPIN.length === 4) {
      this.btnNextText = 'Confirm and add family member';
      this.btnIsDisabled = false;
    } else if (this.registerStep === 4 && this.userPIN.length < 4) {
      this.btnIsDisabled = true;
      this.btnNextText = 'First you need to enter PIN';
    } else {
      this.btnIsDisabled = true;
    }
  }
  activateBtn() {
    this.btnIsDisabled = false;
    this.btnSwitch.push(this.registerStep);
  }

  checkLength() {
    this.setButtonStatus(4);
  }

  onClickPrev() {
    this.registerStep--;
    this.setButtonStatus(this.registerStep);
    if (this.registerStep < 0) {
      this.registerStep = 0; //out to /start path
      return;
    } else if (this.registerStep === 3) {
      this.btnNextText = 'Next';
    }
  }

  onClickNext() {
    this.registerStep++;
    this.setButtonStatus(this.registerStep);
    if (this.registerStep === 5) {
      let agregatedInfo = { id: uuid(), type: this.personType, name: this.userNamee, avatar: this.userAvatar, color: this.userColor, pin: this.userPIN };
      this.registerInfo(agregatedInfo);
    }
  }

  getUserType(userType: string) {
    this.personType = userType;
    this.activateBtn();
  }

  getName(user: string) {
    if (user.length > 0) {
      this.activateBtn();
      this.userNamee = user;
    } else if (user.length === 0) {
      console.log(user.length);
      this.userNamee = "";
      this.setButtonStatus(this.registerStep);
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
