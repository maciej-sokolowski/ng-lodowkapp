import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Product} from '../../../interfaces/Models/product';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})

export class CameraComponent implements OnInit {

  public imageUrl: string;
  public dots = [];

  constructor(private socket: Socket) {
  }

  ngOnInit() {
    this.socket.on('image', (image) => this.imageUrl = `data:image/jpeg;base64,${image}`);
  }


  setDot($event) {

    const dot = {x: `${$event.layerX - 30}px`, y: `${$event.layerY - 30}px`};
    this.dots.push(dot);
  }


}


