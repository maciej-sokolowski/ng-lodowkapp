import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input()
  chosenAvatar: string;
  @Output() emitAvatar = new EventEmitter<string>();

  avatars = ['eagle', 'badger', 'parrot', 'cat', 'owl']

  constructor() { }

  ngOnInit() {
  }


  chooseAvatar(avatar: string): void {
    this.chosenAvatar = avatar;
    this.emitAvatar.emit(avatar);
  }

}
