import {Component, OnInit} from '@angular/core';

enum Edit {
  YES = 1,
  NO = 2
}

@Component({
  selector: 'app-product-cloud',
  templateUrl: './product-cloud.component.html',
  styleUrls: ['./product-cloud.component.scss']
})
export class ProductCloudComponent implements OnInit {

  editable: Edit;

  constructor() {
  }

  ngOnInit() {
    this.editable = Edit.YES;
  }


}
