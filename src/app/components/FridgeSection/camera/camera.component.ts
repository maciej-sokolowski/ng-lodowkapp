import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  public imageUrl: string;

  constructor(private socket: Socket) {
  }

  ngOnInit() {
    this.socket.on('image', (image) => this.imageUrl = `data:image/jpeg;base64,${image}`);
  }

}


