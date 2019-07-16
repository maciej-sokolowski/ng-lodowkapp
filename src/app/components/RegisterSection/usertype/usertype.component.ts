import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.scss']
})
export class UsertypeComponent implements OnInit {

  private person: string;
  private isDisabled: boolean;

  @Input()
  isChecked: string;

  @Output()
  emitUserType = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isFirstAccount();
  }

  isFirstAccount() {
    let check = this.userService.getItems();
    if (check.value.length === 0) {
      console.log(check.value.length);

      this.isChecked = 'checked';
      this.userParent();
      this.isDisabled = true;
    }
  }

  choseUserType(value: string) {
    this.emitUserType.emit(value);
  }

  userParent() {
    this.person = "PARENT";
    this.choseUserType(this.person);
  }

  userChild() {
    this.person = "CHILDREN";
    this.choseUserType(this.person);
  }
}
