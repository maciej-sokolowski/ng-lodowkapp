import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  monthArray = ["stycznia", "lutego", "marca", "kwietnia",
    "maja", "czerwca", "lipca", "sierpnia", "września",
    "października", "listopada", "grudnia"];

  dayArray = ["Niedziela", "Poniedziałek", "Wtorek", "Środa",
    "Czwartek", "Piątek", "Sobota"];

  today = new Date();

  day = this.today.getDay();
  month = this.today.getMonth();
}
