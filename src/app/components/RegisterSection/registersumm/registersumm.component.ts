import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fadeIn, ShowOpacity } from 'src/app/animations';

@Component({
  selector: 'app-registersumm',
  templateUrl: './registersumm.component.html',
  styleUrls: ['./../../avatar/avatar.component.scss', './../color/color.component.scss', './../usertype/usertype.component.scss', './registersumm.component.scss'],
  animations: [fadeIn, ShowOpacity]

})
export class RegistersummComponent implements OnInit {

  userIcon: string;

  @Input()
  infoToLogin;

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

  @Output() emitLoginInfo = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
    this.setUserTypeIcon();
  }

  setUserTypeIcon() {
    if (this.userType === 'PARENT') {
      this.userIcon = 'parent';
    } else if (this.userType === '') {
      this.userIcon = 'none';
    } else if (this.userType === 'CHILDREN') {
      this.userIcon = 'child';
    }
  }

  emitAll($event) {
    this.emitLoginInfo.emit(this.infoToLogin);
  }
}
