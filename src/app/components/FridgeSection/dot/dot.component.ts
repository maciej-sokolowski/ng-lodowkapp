import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../interfaces/Models/product';
import {ProductService} from '../../../services/product.service';

enum Visible {
  YES = 1,
  NOT = 2,
}

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {

  @Input() product: Product;
  visibleLabel = Visible.YES;


  constructor(private prService: ProductService) {

  }

  ngOnInit() {

  }

  changeLabelVisibility($event) {

    console.log($event);
    if (this.visibleLabel === Visible.YES) {
      this.visibleLabel = Visible.NOT;
    } else {
      this.visibleLabel = Visible.YES;
    }

  }


}
