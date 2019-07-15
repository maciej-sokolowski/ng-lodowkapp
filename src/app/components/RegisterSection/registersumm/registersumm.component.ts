import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-registersumm',
  templateUrl: './registersumm.component.html',
  styleUrls: ['./../../avatar/avatar.component.scss', './../color/color.component.scss', './../usertype/usertype.component.scss', './registersumm.component.scss']
})
export class RegistersummComponent implements OnInit {

  userIcon: string;

  @Input()
  infoToDisplay;

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
    if (this.userType === 'PARENT') {
      this.userIcon = 'parent';
    } else {
      this.userIcon = 'child';
    }
  }
  emitAll(event) {
    console.log(this.infoToDisplay);
  }
}
