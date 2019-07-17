import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() title: string;
  @Input() date: Date;

  constructor() {
  }

  ngOnInit() {
  }

}
