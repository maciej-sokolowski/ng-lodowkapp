import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(private socket: Socket) {
  }

  getStream() {
    // return this.socket.on('image', (image) => console.log(image));
  }


  // private subject: Subject<MessageEvent>;
  //

  //
  // private create(url: string): Subject<MessageEvent> {
  //   let webSocket = new WebSocket(url);
  //   let observable = new Observable((subscriber: Observer<MessageEvent>) => {
  //     webSocket.onmessage = subscriber.next.bind(subscriber);
  //     webSocket.onerror = subscriber.error.bind(subscriber);
  //     webSocket.onclose = subscriber.complete.bind(subscriber);
  //     return webSocket.close.bind(webSocket);
  //   });
  //
  //   let observer = {
  //     next: (data: object) => {
  //       if (webSocket.readyState == WebSocket.OPEN) {
  //         webSocket.send(JSON.stringify(data));
  //       }
  //     }
  //   };
  //
  //   return new Subject()
  // }
  //
  // public connect(url: string): Subject<MessageEvent> {
  //   if (!this.subject) {
  //     this.subject = this.create(url);
  //     console.log('Succesfuly Connected ' + url);
  //   }
  //   return this.subject;
  // }


}
