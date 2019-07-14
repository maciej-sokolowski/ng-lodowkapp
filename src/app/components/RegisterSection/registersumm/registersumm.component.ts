import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-registersumm',
  templateUrl: './registersumm.component.html',
  styleUrls: ['./../../avatar/avatar.component.scss', './../color/color.component.scss', './registersumm.component.scss']
})
export class RegistersummComponent implements OnInit {

  @Input()
  userName: string;
  @Input()
  chosenAvatar: string;
  @Input()
  chosenColor: string;


  constructor() { }

  ngOnInit() {
    // this.userName = 'marcin';
    // this.chosenAvatar = 'cat';
    // this.chosenColor = 'pink';
  }
}
