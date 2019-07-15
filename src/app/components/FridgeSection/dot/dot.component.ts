import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../interfaces/Models/product';
import {ProductService} from '../../../services/product.service';


@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {

  @Input() product: Product;

  constructor(private prService: ProductService) {

  }

  ngOnInit() {
    
  }


}
