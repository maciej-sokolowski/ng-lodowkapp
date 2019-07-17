import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.scss']
})
export class UsertypeComponent implements OnInit {
  @Input()
  private person: string;

  private isDisabled: boolean;

  private isCheckedParent: string;
  private isCheckedChild: string;

  @Output()
  emitUserType = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isFirstAccount();
  }

  isFirstAccount() {
    let check = this.userService.getItems();
    if (check.value.length === 0) {
      this.isCheckedParent = 'checked';
      this.userParent();
      this.isDisabled = true;
    } else if (this.person === "CHILDREN") {
      this.isCheckedChild = 'checked';
    } else if (this.person === "PARENT") {
      this.isCheckedParent = 'checked';
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
