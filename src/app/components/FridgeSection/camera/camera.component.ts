import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Coordinate} from '../../../interfaces/coordinate';
import {Product} from '../../../interfaces/Models/product';
import {ProductService} from '../../../services/product.service';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})

export class CameraComponent implements OnInit {

  public imageUrl: string;
  public products: Product[];

  constructor(private socket: Socket, private prService: ProductService) {
    this.socket.on('image', (image) => this.imageUrl = `data:image/jpeg;base64,${image}`);
  }

  ngOnInit() {
    this.prService.getItems().subscribe(products => this.products = [...products]);
  }


  setDot($event) {
    // @ts-ignore
    const product: Product = {
      id: uuid(),
      fridgePosition: {x: `${$event.layerX - 30}px`, y: `${$event.layerY - 30}px`}
    };
    this.products.push(product);
  }

}
