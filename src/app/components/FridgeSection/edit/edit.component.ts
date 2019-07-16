import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor() {
  }

  nameDate = new FormGroup({
    name: new FormControl(''),
    expiry: new FormControl('')
  });

  ngOnInit() {
  }

  showValue(formValue: object) {
    console.log(formValue);
  }

}
