import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NameDate} from '../../../interfaces/name-date';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Output() nameAndDateEmitter = new EventEmitter<NameDate>();

  constructor() {
  }


  nameDate = new FormGroup({
    name: new FormControl(''),
    expiry: new FormControl('')
  });

  ngOnInit() {
  }

  emitDateAndName(formValue: FormGroup) {
    console.log(formValue.value);
    const data: NameDate = {...formValue.value};
    console.log(data);
    this.nameAndDateEmitter.emit(data);
    this.nameDate.reset({});
  }

}
