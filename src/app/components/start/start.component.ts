import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // private data: Observable<string>;
  // private chosenColor: string;


  value: string;


  changed(value: string) {
    console.log(`Child changed!`, value);
    this.value = value;

    // this.data = new Observable(observer => {
    //   observer.next();
    // });
    // let subscription = this.data.subscribe(
    //   value => this.chosenColor = color,
    // );
  }

}
