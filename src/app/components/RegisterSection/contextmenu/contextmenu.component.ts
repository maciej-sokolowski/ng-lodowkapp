import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss', './../color/color.component.scss']
})
export class ContextmenuComponent implements OnInit {
  @Input()
  chosenColor: string;
  isParent: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoggedUser()[0].type === 'PARENT' ? this.isParent = false : this.isParent = true;
  }
}
