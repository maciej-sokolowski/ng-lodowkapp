import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-registersumm',
  templateUrl: './registersumm.component.html',
  styleUrls: ['./../../avatar/avatar.component.scss', './../color/color.component.scss', './../usertype/usertype.component.scss', './registersumm.component.scss']
})
export class RegistersummComponent implements OnInit {

  userIcon: string;

  @Input()
  userName: string;
  @Input()
  chosenAvatar: string;
  @Input()
  chosenColor: string;
  @Input()
  userType: string;
  @Input()
  PIN?: string;


  constructor() { }

  ngOnInit() {
    this.setUserTypeIcon();
    // this.userName = 'marcin';
    // this.chosenAvatar = 'cat';
    // this.chosenColor = 'pink';
  }

  setUserTypeIcon() {
    console.log(this.userType);
    if (this.userType === 'PARENT') {
      this.userIcon = 'parent';
      console.log(this.userIcon);
    } else {
      this.userIcon = 'child';
    }
  }

}
